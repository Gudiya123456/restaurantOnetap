import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const CrmSwal = withReactContent(Swal);
import logo1 from '../../assets/images/auth/Logo 1.svg'
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const NewForgot = () => {

    const {state} = useLocation();
    console.log("state", state);
    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);

    console.log('new reset')

    console.log(crmToken)
    const navigate = useNavigate();
    const defaultParams = { email: state.email, password: '', password_confirmation: '' };
    const [errors, setErros] = useState<any>({});
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    const changeValue = (e: any) => {
        const { value, name } = e.target;
        setErros({ ...errors, [name]: '' });
        setParams({ ...params, [name]: value });
        console.table(params)

    };

    const validate = () => {
        setErros({});
        let errors = {};
        if (!params.password) {
            errors = { ...errors, password: 'password is required!' };
        }
        if (!params.password_confirmation) {
            errors = { ...errors, password_confirmation: 'confirm password is required!' };
        } else if (params.password_confirmation != params.password) {
            errors = { ...errors, password_confirmation: 'confirm password miss match!' };
        }
        console.log(errors)
        setErros(errors);
        return { totalErrors: Object.keys(errors).length };
    };

    const [btnLoading, setBtnLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



    const resetPasswordApi = async (data: any) => {
        setBtnLoading(true);

        try {
            const response = await axios({
                method: 'post',
                // url: "https://thala.onetapdine.com/api/reset-password",
                url: `${SITE_URL}/api/reset-password`,
                data,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            if (response.data.status === 'success') {
                navigate('/login')
            } else {
                alert("Error")
            }
        } catch (error: any) {
            console.log(error)
            if (error?.response?.status === 422) {
                const serveErrors = error.response.data.errors;
                for (var key in serveErrors) {
                    setErros({ ...errors, [key]: serveErrors[key][0] });
                }

                CrmSwal.fire({
                    title: "Server Validation Error! Please solve",
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000,
                    customClass: {
                        popup: "color-danger"
                    }
                });
            }
        } finally {
            setBtnLoading(false)
        }
    };

    const resetPassword = () => {
        const isValid = validate();
        if (isValid.totalErrors) return false;
        const data = new FormData();
        data.append("password_confirmation", params.password_confirmation);
        data.append("password", params.password);
        data.append("email", params.email);
        data.append("auth_token", state.auth_token);
        resetPasswordApi(data);
    }

    return (
        <>

            <div>
                <div className="relative flex min-h-screen items-center justify-center bg-cover bg-[url(/restaurant/kot/images/auth/forgot-bg.jpeg)] bg-[#050100] bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <div className="relative flex w-full max-w-[1502px] flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden rounded-md  lg:flex-row lg:gap-10 xl:gap-0">

                        <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6

                            ">
                             <div className='w-full max-w-[440px] bg-white rounded-xl lg:mt-16 p-10' >

                             <form className="space-y-1 dark:text-white h-full rounded-xl">
            <h1 className="text-2xl mt-1 font-bold  !leading-snug text-black md:text-2xl text-center">
                <img className='text-center ml-20 mb-2 items-center w-1/2' src={logo1} alt="" />
            </h1>

            <div style={{fontFamily:'Roboto', fontWeight:200, fontStyle:'normal', fontSize:'14px'}}>
                <input type="password" value={params.password} name='password' onChange={(e) => changeValue(e)} placeholder='New Password' className="w-full rounded-lg border border-black bg-white px-4 py-2 text-sm font-normal  text-black mb-1 " />

                <span className="text-danger font-semibold text-sm p-2">{errors.password}</span>
            </div>
            <div style={{fontFamily:'Roboto', fontWeight:200, fontStyle:'normal', fontSize:'14px'}}>
                <input type="password" value={params.password_confirmation} name='password_confirmation'  onChange={(e) => changeValue(e)} placeholder='Confirm Password' className="w-full rounded-lg border border-black bg-white px-4 py-2 text-sm focus font-normal text-black mb-1 " />

                <span className="text-danger font-semibold text-sm p-2">{errors.password_confirmation}</span>
            </div>
            <button type="button" onClick={() => resetPassword()} disabled={btnLoading} style={{fontFamily:'Roboto', fontWeight:600, fontStyle:'normal', fontSize:'14px'}} className="btn bg-black text-white  w-full rounded-lg border-0 !mt-2 ">
                {btnLoading ? 'Please Wait...' : 'Reset Password'}
            </button>

                            </form>

                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


};

export default NewForgot;

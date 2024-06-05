import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/images/auth/Logo 1.svg'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const CrmSwal = withReactContent(Swal);
const Login = () => {


    const [isLoading, setIsLoading] = useState(true);

    const defaultParams = { email: '', password: '' };
    const [errors, setErros] = useState<any>({});
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    const changeValue = (e: any) => {
        const { value, name } = e.target;
        setErros({ ...errors, [name]: '' });
        setParams({ ...params, [name]: value });
    };

    const validate = () => {
        setErros({});
        let errors = {};
        if (!params.email) {
            errors = { ...errors, email: 'The email field is required.' };
        }
        if (!params.password) {
            errors = { ...errors, password: 'The password field is required.' };
        }
        setErros(errors);
        return { totalErrors: Object.keys(errors).length };
    };

    const [btnLoading, setBtnLoading] = useState(false);


    const loginApi = async (data: any) => {
        setBtnLoading(true)
        try {
            const response = await axios({
                method: 'post',
                url: window.location.origin + "/api/restaurant/dashboard/login",
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.status === 'success') {


                // const restaurantData = response.data.restaurantData;
                // setParams(JSON.parse(JSON.stringify(defaultParams)))
                // dispatch(setRestaurantToken(response.data.token))
                // dispatch(setUserData(response.data.user))
                // dispatch(setBranches(response.data.branches))
                // dispatch(setCurrentBranch(response.data.branches[0]))
                // if (restaurantData) dispatch(setRestaurantData(
                //     {
                //         logo: restaurantData?.logo ? restaurantData.logo : '/default/logo.png',
                //         fav_icon: restaurantData?.fav_icon ? restaurantData.fav_icon : '/default/fav_icon.png',
                //         mode: restaurantData?.mode ? restaurantData.mode : 'LIVE',
                //         name: restaurantData?.restaurant_name ? restaurantData.restaurant_name : 'Restaurant Name'
                //     }
                // ))
                // if (response.data.user.rule) dispatch(setPermissions(JSON.parse(response.data.user.rule.permissions)))
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
                    width: 450,
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

    const login = () => {
        const isValid = validate();
        if (isValid.totalErrors) return false;
        const data = new FormData();
        data.append("email", params.email);
        data.append("password", params.password);
        loginApi(data);
    };


    return (
        <>
            <div>
                <div style={{ fontFamily: 'Poppins' }} className="relative flex min-h-screen items-center justify-center bg-cover bg-[url(/restaurant/kot/images/auth/login-bg.jpeg)] bg-[#323232] bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <div className="relative flex w-full max-w-[1502px] flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden rounded-md      lg:flex-row lg:gap-10 xl:gap-0">
                        <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6">
                            <div className="w-full max-w-[440px] bg-white rounded-xl lg:mt-16 p-10">

                                {isLoading ? <>

                                    <b>Loading....</b>

                                </> : (

                                    <form className="space-y-1 dark:text-white h-full rounded-xl">
                                        <h1 className="text-2xl mt-1 font-bold  !leading-snug text-black md:text-2xl text-center">
                                            <img className='text-center ml-20 mb-2 items-center w-1/2' src={logo1} alt="" />
                                        </h1>
                                        <div style={{ fontFamily: 'Roboto', fontWeight: 200, fontStyle: 'normal', fontSize: '14px' }}>
                                            <input type="email" value={params.email} name='email' onChange={(e) => changeValue(e)}
                                                placeholder='Enter Email Address' className="w-full rounded-lg border border-black bg-white px-4 py-2 text-sm font-normal  text-black mb-1 " />
                                        </div>
                                        <div style={{ fontFamily: 'Roboto', fontWeight: 200, fontStyle: 'normal', fontSize: '14px' }}>
                                            <input type="password" value={params.password} name='password' onChange={(e) => changeValue(e)}
                                                placeholder='Enter Password' className="w-full rounded-lg border border-black bg-white px-4 py-2 text-sm focus font-normal text-black mb-1 " />
                                        </div>

                                        <button type="button" style={{ fontFamily: 'Roboto', fontWeight: 600, fontStyle: 'normal', fontSize: '14px' }} className="btn bg-black text-white  w-full rounded-lg border-0 !mt-2 ">
                                            Login
                                        </button>

                                        <div className='flex justify-between mt-1 ' style={{ fontFamily: 'Nunito, sans-serif' }} >
                                            <div className="flex items-center gap-1 mb-4">
                                                <input type='checkbox' />
                                                <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', color: 'black' }} >Remember me?</p>
                                            </div>
                                            <NavLink to='/forgot' >
                                                <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', color: 'black' }}>Forgot password?</p>
                                            </NavLink>
                                        </div>
                                    </form>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Login;

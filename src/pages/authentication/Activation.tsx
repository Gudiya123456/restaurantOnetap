import React, { useState } from 'react'
import logo1 from '../../assets/images/auth/doll.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';



export default function Activation({actionData}) {
    console.log(actionData)
    const[btnLoading,setIsBtnLoading]=useState(false);
    const navigate=useNavigate();
    const [errors, setErros] = useState<any>({});
    const defaultParams = { password: '', password_confirmation: '' };
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));
    const [alreadyExist,setAlreadyExist]=useState(null);


    const changeValue = (e: any) => {
        const { value, name } = e.target;
        setErros({ ...errors, [name]: '' });
        setParams({ ...params, [name]: value });
        console.table(params)
    };
    const validate = () => {
        setErros({});
        let errors = {};
        if (!params.password_confirmation) {
            errors = { ...errors, password_confirmation: 'The password_confirmation field is required.' };
        }
        if (!params.password) {
            errors = { ...errors, password: 'The password field is required.' };
        }
        setErros(errors);
        return { totalErrors: Object.keys(errors).length };
    };
    const activateApi = async (data: any) => {
        setIsBtnLoading(true)
        try {
            const response = await axios({
                method: 'post',
                url: `${SITE_URL}/api/activation`,
                data,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === 'success') {
                navigate('/login');
                setAlreadyExist(response.data.title)

            }

            if(response.data.status=='error'){
                if(response.data.title=='Already Activated')
                // alert(response.data.message)
                setAlreadyExist(response.data.title)
            }
            else{
                alert('error');
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
            setIsBtnLoading(false)
        }
    };


    const activate = () => {
        const isValid = validate();
        if (isValid.totalErrors) return false;
        const data = new FormData();
        data.append("password", params.password);
        data.append("password_confirmation", params.password_confirmation);
        console.log(data)
        activateApi(data);
    };

    return (
        <div>
            {
                alreadyExist?<Login/>:(
                <div className="relative flex min-h-screen items-center justify-center bg-cover bg-[url(/restaurant/kot/images/auth/create2.png)] bg-red-600 bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <div className="relative flex w-full max-w-[1502px] flex-col justify-between bg-cover bg-center bg-no-repeat overflow-hidden rounded-md     lg:flex-row lg:gap-10 xl:gap-0">
                        <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 ">
                            <div className='w-full max-w-[440px] bg-white dark:bg-[#161616] rounded-xl lg:mt-16 p-10' >
                                <form className="space-y-1 dark:text-white h-full rounded-xl">
                                    <h1 className="text-2xl  font-bold flex justify-center  !leading-snug text-black md:text-2xl text-center">

                                        <img className='  text-center  mb-2 items-center w-1/4' src={logo1} alt="" />
                                    </h1>
                                    <h1 className='text-2xl mt-1 font-bold flex justify-center  !leading-snug text-black dark:text-white md:text-2xl text-center' >Hi {actionData.name}</h1>
                                    <p className=' flex justify-center text-black dark:text-white ' >Please create new password to continue </p>


                                    <div style={{ fontFamily: 'Roboto', fontWeight: 200, fontStyle: 'normal', fontSize: '14px' }}>
                                        <input type="password"  value={params.password} name='password' onChange={(e) => changeValue(e)} placeholder='Create New Password' className="w-full rounded-lg  bg-[#F2F2F2] px-4 py-2 mt-2 text-xs font-normal  text-black mb-1 " />
                                        <span className="text-danger font-semibold text-sm p-2">{errors.password}</span>
                                    </div>
                                    <div style={{ fontFamily: 'Roboto', fontWeight: 200, fontStyle: 'normal', fontSize: '14px' }}>
                                        <input type="password" alue={params.password_confirmation} name='password_confirmation'  onChange={(e) => changeValue(e)}  placeholder='Confirm Password' className="w-full rounded-lg  bg-[#F2F2F2] px-4 py-2 text-xs focus font-normal text-black mb-1 " />
                                        <span className="text-danger font-semibold text-sm p-2">{errors.password_confirmation}</span>
                                    </div>
                                    <button onClick={()=>{activate()}} type="button" disabled={btnLoading} style={{ fontFamily: 'Roboto', fontWeight: 600, fontStyle: 'normal', fontSize: '14px' }} className="btn shadow-none bg-gradient-to-r from-[#1C2BB9] to-[#EE030D] text-white  w-full rounded-lg border-0 !mt-2 ">
                                       {btnLoading?'Loading.....':'Activate'}
                                    </button>
                                    <div className='mt-5 '>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
    )
}

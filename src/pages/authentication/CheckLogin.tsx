import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo1 from '../../assets/images/auth/Logo 1.svg'
import { setToken, setUserData } from '../../store/themeConfigSlice';
import { IRootState } from '../../store';
import Error from '../../components/Error';
import Login from './Login';
import Activation from './Activation';
import LoadingPage from '../../components/Layouts/LoadingPage';

const CheckLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state: IRootState) => state.themeConfig.token)
    console.log(token)
    useEffect(() => {
        if (token) navigate('/')
        else checkRestaurant()
    }, [token])
    const [isLoading, setIsLoading] = useState(true)
    const [actionPage,setActionPage]=useState(null)
    const [actionData,setActionData]=useState(null);
    const checkRestaurant = async () => {
        setIsLoading(true)

        try {
            const response = await axios({
                method: 'get',
                url: `${SITE_URL}/api/check-restaurant`,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if(response.data.status=='success'){

                setActionPage('login')
            }
            else if(response.data.status=='error'){
                if(response.data.data.action=='activation') {
                    setActionData(response.data.data);
                    setActionPage('activate')}
                    else if(response.data.data.action=='error') {
                        alert(response.data.message);
                 setActionPage('error')
                setActionData(response.data.data);
                    }
            }
        } catch (error) {

        }

        finally {
            setIsLoading(false)

        }

    }


    return (
        <>

            <div>
              {
                isLoading?<LoadingPage/>:
                actionPage=='error'?<Error errorData={actionData}/>:
                actionPage=='activate'?<Activation actionData={actionData}/>:
                actionPage=='login'?<Login/>:null
              }
            </div>

        </>
    )
};

export default CheckLogin;

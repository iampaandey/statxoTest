import React from 'react'
import ButtonT1 from './buttons/ButtonT1'
import { useDispatch} from 'react-redux';
import { loginThunk } from '../redux/features/userSlice';


const LoginPage = () => {
    const dispatch=useDispatch();
    const handleUserLogin=()=>{
     let formData={
        userType:'user'
     }
     dispatch(loginThunk(formData));
    }
    const handleAdminLogin=()=>{
        let formData={
            userType:'admin'
         }
         dispatch(loginThunk(formData));
    }
  return (
    <div className='flex justify-center items-center gap-x-4 mt-60'>
        <div className="font-semibold">
            Please Login First :
        </div>
 <ButtonT1 buttonName="Login As Admin" mainBg="blue-500" hoverBg="blue-600" onclick={handleAdminLogin} />
 <ButtonT1 buttonName="Login As User" mainBg="blue-500" hoverBg="blue-600" onclick={handleUserLogin} />
    </div>
  )
}

export default LoginPage;

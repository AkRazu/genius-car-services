import React from 'react';
import { useAuthState, useSendEmailVerification} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate,useLocation } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user,loading]= useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    if(!user.emailVerified){
        return <div >
            <h3 className='text-danger'>Your Email is not verified !!</h3>
            <h5 className='text-success'>Please verify your email address</h5>
            <button
            onClick={async () => {
                const success = await sendEmailVerification();
                if (success) {
                  toast.success('Sent email');
                }
              }}
               className='btn btn-success'>Send verification</button>
               <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;
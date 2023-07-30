import React from 'react'
import {auth, provider} from '../firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
function Login({setIsAuth}) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/home")
        })
    }
    return <div className="loginPage">
        <p>Sign In With Google To Continue</p>
        <button class="login-with-google-btn" onClick={signInWithGoogle}>
            Sign In With Google
        </button>
    </div>
}

export default Login;

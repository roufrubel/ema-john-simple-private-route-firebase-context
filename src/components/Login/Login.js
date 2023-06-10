import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
        const location = useLocation();
        const navigate = useNavigate();
        // console.log(location.state?.from)
        const navigate_uri = location.state?.from || "/shop";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(navigate_uri)
            // navigate(navigate_uri, { replace: true })
        })
    }

    return (
        <div>
            <div className="login-align">
            <h2>Sign-in</h2>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" /> <br />
                <input type="password" name="" id=""  placeholder="Your Password" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to ema-john website? <Link to="/register">Create account</Link></p>
            <div>-------------or------------</div>
            <br />
            <button 
            onClick={handleGoogleLogin}  
            className='btn btn-regular'
            >Google Sing-in</button>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error.message);
            });
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form /* onSubmit="" */>
                    <input type="email" name="" id="" placeholder="Your Email Here" />
                    <br />
                    <input type="password" name="" id="" placeholder="Type Your Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New To ema-john ? <Link to="/register">Create Account</Link></p>
                <div>---------Or---------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
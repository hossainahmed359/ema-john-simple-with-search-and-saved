import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import '../Login/Login.css'

const Register = () => {
    return (
        <div className="login-form">
            <div >
                <h2>Register : Create Account</h2>
                {/* <form onSubmit="" action="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="password" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form> */}
                <p>Already have an account ?<Link to="login">
                    Login
                </Link> </p>
                <div>----------Or----------</div>
                <button className="btn-regular">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;
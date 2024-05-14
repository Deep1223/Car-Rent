import React, { startTransition, useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../style/pages/_login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import LogIn from '../../images/login-img.jpg';
import GoogleImg from '../../images/google.svg';
import Logo from '../../images/logo.svg';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission

        console.log('Email:', email);
        console.log('Password:', password);

        // Check if both email and password are not empty
        if (email.trim() !== '' && password.trim() !== '') {
            // Both fields are filled, navigate to '/carrent'
            handleNavigation('/carrent');
        } else {
            // Display an error message or handle the case when one or both fields are empty
            console.log('Please fill in both email and password fields.');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100 g-0 align-items-center"> {/* Added align-items-center class here */}
                {/* Left Side */}
                <div className="col-lg-8 d-none d-lg-block">
                    <img src={LogIn} alt="Login Image" className="img-fluid" />
                </div>
                {/* / Left Side */}

                {/* Right Side */}
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <div className="col-sm-8"> {/* Adjust the width of the right side */}
                        {/* Logo */}
                        <a href="javascript:void(0)" onClick={() => handleNavigation('/carrent')} className="d-flex justify-content-center mb-4">
                            <img src={Logo} alt="logo" />
                        </a>
                        {/* / Logo */}

                        <div className="text-center md-s">
                            <div className="fw-bold">Sign In</div>
                            <div className="text-secondary">Get access to your account</div>
                        </div>

                        {/* Social login */}
                        <button className="btn btn-lg btn-outline-secondary w-100 mb-3 btn-outline-custom">
                            <img src={GoogleImg} alt="google" className="login-google-img me-2 fs-6" />Login with Google
                        </button>
                        {/* / Social login */}

                        {/* Divider */}
                        <div className="position-relative">
                            <hr className="text-secondary" />
                            <div className="divider-content-center">Or</div>
                        </div>
                        {/* / Divider */}

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input type="email" className="form-control form-control-lg fs-6" placeholder="Email"  />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input type="password" className="form-control form-control-lg fs-6" placeholder="Password"  />
                            </div>
                            <div className="input-group mb-3 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary">
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div>
                                    <small><a href="javascript:void(0)">Forgot Password?</a></small>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100">Sign In</button>
                        </form>
                        {/* / Form */}

                        <div className="text-center">
                            <small>Don't have an account?
                                <a href="javascript:void(0)" onClick={() => handleNavigation('/signup')} className="fw-bold">Sign Up</a>
                            </small>
                        </div>
                    </div>

                </div>
            </div>
            {/* / Right Side */}
        </div>
    );


};

export default SignIn;

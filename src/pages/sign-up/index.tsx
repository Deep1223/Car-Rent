import React, { startTransition } from 'react';
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

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
        });
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
                        <a href="javaScript:void(0)" onClick={() => handleNavigation('/carrent')} className="d-flex justify-content-center mb-4">
                            <img src={Logo} alt="logo" />
                        </a>
                        {/* / Logo */}

                        <div className="text-center md-s">
                            <div className="fw-bold">Sign Up</div>
                            <div className="text-secondary">Get Create to your account</div>
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
                        <form action="#">
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input type="email" className="form-control form-control-lg fs-6" placeholder="Email" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input type="password" className="form-control form-control-lg fs-6" placeholder="Password" required />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                                <input type="password" className="form-control form-control-lg fs-6" placeholder="Conform Password" required />
                            </div>
                            <div className="input-group mb-3 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary">
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div>
                                    <small><a href="javaScript:void(0)">Forgot Password?</a></small>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
                        </form>
                        {/* / Form */}

                        <div className="text-center">
                            <small>Already have an account?
                                <a href="javaScript:void(0)" onClick={() => handleNavigation('/signin')} className="fw-bold">Sign In</a>
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

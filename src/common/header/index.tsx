import React, {startTransition} from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../images/logo.svg';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
            
        });
    };
    return (
        <div className="header">
            <div className="cr-flex header-component">
                <div className="header-logo-div">
                    <a href="javascript:void(0)" onClick={()=> handleNavigation('/carrent')}><img src={Logo} alt="logo" /></a>
                </div>
                <div className="header-component-div cr-align-item">
                    <p className="cr-header"><a href="javascript:void(0)">Become a renter</a></p>
                    <p className="cr-header"><a href="javascript:void(0)">Rental deals</a></p>
                    <p className="cr-header"><a href="javascript:void(0)">How it work</a></p>
                    <p className="cr-header"><a href="javascript:void(0)">choose us</a></p>
                </div>
                <div className="header-login-div cr-align-item">
                    <a href="javascript:void(0)" onClick={() => handleNavigation('/signin')}>
                        <div className="header-signin-button-div">
                            <div>Sign in</div>
                        </div>
                    </a>
                    <a href="javascript:void(0)" onClick={() => handleNavigation('/signup')}>
                        <div className="header-signup-button-div">
                            <div className="cr-btn-text">Sign up</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
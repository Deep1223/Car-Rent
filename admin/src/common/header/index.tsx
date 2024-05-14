import React, { startTransition } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/common/header.css';

const Header: React.FC = () => {
    return (
        <header className="header-bg-color header-padding fixed-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="fs-5">Page Name</h1>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-decoration-none">
                            <i className="bi bi-person-circle fs-4 profile-icon-color"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;


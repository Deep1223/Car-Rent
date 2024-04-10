import React, { useEffect, useState } from 'react';
import '../../styles/common/sidebar.css';

const Sidebar: React.FC = () => {
    useEffect(() => {
        const toggleSidebar = () => {
            document.querySelector("#sidebar")?.classList.toggle("expand");
        };

        const addClickListener = (selector: string) => {
            const element = document.querySelector(selector);
            if (element) {
                element.addEventListener("click", toggleSidebar);
                return () => element.removeEventListener("click", toggleSidebar);
            }
            return () => { };
        };

        const cleanupFunctions = [
            addClickListener(".toggle-sidebar-profile"),
            addClickListener(".toggle-sidebar-task"),
            addClickListener(".toggle-sidebar-master"),
            addClickListener(".toggle-sidebar-notification"),
            addClickListener(".toggle-sidebar-setting"),
            addClickListener(".toggle-sidebar-logout"),
            addClickListener(".toggle-sidebar-master-login"),
            addClickListener(".toggle-sidebar-master-register")
        ];

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, []);

    const [isDropdownShown, setIsDropdownShown] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownShown(!isDropdownShown);
    };

    return (
        <aside id="sidebar" className='cr-sidebar-container'>
            <ul className="sidebar-nav">
                <li className="sidebar-item cr-slidebar">
                    <a href="#" className="sidebar-link toggle-sidebar-profile">
                        <i className="bi bi-speedometer2 sidebar-icon-color"></i>
                        <span className="text-black">Profile</span>
                    </a>
                </li>
                <li className="sidebar-item cr-slidebar">
                    <a href="#" className="sidebar-link toggle-sidebar-task">
                        <i className="bi bi-list-task sidebar-icon-color"></i>
                        <span className="text-black">Task</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#master" aria-expanded="false" aria-controls="master">
                            <div className='d-flex justify-content-start align-items-center'>
                                <div><i className="bi bi-box toggle-sidebar-master sidebar-icon-color"></i></div>
                                <div className='cr-sidebar-width' onClick={toggleDropdown}><span className="text-black cr-sidebar-width">Masters</span></div>
                            </div>
                    </a>
                    <ul id="master" className={`sidebar-dropdown list-unstyled ${isDropdownShown ? 'collapse' : 'collapse show'}`} data-bs-parent="#sidebar">
                        <li className="sidebar-item toggle-sidebar-master-login">
                            <a href="#" className="sidebar-link text-black">Login</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-register">
                            <a href="#" className="sidebar-link text-black">Register</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link toggle-sidebar-notification">
                        <i className="bi bi-bell sidebar-icon-color"></i>
                        <span className="text-black">Notification</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link toggle-sidebar-setting">
                        <i className="bi bi-gear sidebar-icon-color"></i>
                        <span className="text-black">Setting</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link toggle-sidebar-logout">
                        <i className="bi bi-box-arrow-right sidebar-icon-color"></i>
                        <span className="text-black">Logout</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;

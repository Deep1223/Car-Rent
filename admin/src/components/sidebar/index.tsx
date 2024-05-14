import React, { useEffect, useState, startTransition } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/common/sidebar.css';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
            
        });
    };

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
            addClickListener(".toggle-sidebar-master-car-master"),
            addClickListener(".toggle-sidebar-master-working-step-master"),
            addClickListener(".toggle-sidebar-master-download-master"),
            addClickListener(".toggle-sidebar-master-company-logo-master"),
            addClickListener(".toggle-sidebar-master-testimonial-master"),
            addClickListener(".toggle-sidebar-master-why-choose-us-master"),
            addClickListener(".toggle-sidebar-master-download-link-master"),
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
                    <a href="javascript:void(0)" className="sidebar-link toggle-sidebar-profile">
                        <i className="bi bi-speedometer2 sidebar-icon-color"></i>
                        <span className="text-black">Profile</span>
                    </a>
                </li>
                <li className="sidebar-item cr-slidebar">
                    <a href="javascript:void(0)" className="sidebar-link toggle-sidebar-task">
                        <i className="bi bi-list-task sidebar-icon-color"></i>
                        <span className="text-black">Task</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#master" aria-expanded="false" aria-controls="master">
                            <div className='d-flex justify-content-start align-items-center'>
                                <div><i className="bi bi-box toggle-sidebar-master sidebar-icon-color"></i></div>
                                <div className='cr-sidebar-width' onClick={toggleDropdown}><span className="text-black cr-sidebar-width">Masters</span></div>
                            </div>
                    </a>
                    <ul id="master" className={`sidebar-dropdown list-unstyled collapse ${isDropdownShown ? 'show' : ''}`} data-bs-parent="#sidebar">
                        <li className="sidebar-item toggle-sidebar-master-car-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/carmaster')} className="sidebar-link text-black">Car Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-working-step-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/workingstep')} className="sidebar-link text-black">Working Step Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-download-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/downloadmaster')} className="sidebar-link text-black">Download Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-company-logo-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/companylogomaster')} className="sidebar-link text-black">Company Logo Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-why-choose-us-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/whychooseusmaster')} className="sidebar-link text-black">Why Choose Us Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-testimonial-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/testimonialmaster')} className="sidebar-link text-black">Testimonial Master</a>
                        </li>
                        <li className="sidebar-item toggle-sidebar-master-download-link-master">
                            <a href="javascript:void(0)" onClick={()=> handleNavigation('/downloadlinkmaster')} className="sidebar-link text-black">Download Link Master</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link toggle-sidebar-notification">
                        <i className="bi bi-bell sidebar-icon-color"></i>
                        <span className="text-black">Notification</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link toggle-sidebar-setting">
                        <i className="bi bi-gear sidebar-icon-color"></i>
                        <span className="text-black">Setting</span>
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link toggle-sidebar-logout">
                        <i className="bi bi-box-arrow-right sidebar-icon-color"></i>
                        <span className="text-black">Logout</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;

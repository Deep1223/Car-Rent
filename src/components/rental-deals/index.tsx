import React, {startTransition} from 'react';
import '../../style/components/_rental-deals.css';
import { useNavigate } from "react-router-dom";

import Location from '../../images/location.svg';
import Calendar from '../../images/calendar.svg';

const RentalDeals: React.FC = () =>{
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
            window.scrollTo(0, 0);
        });
    };
    return (
        <div className="rental-deals">
            <div className="cr-flex rental-deals-div">
                <div className="cr-flex-row cr-rental-deals-gap">
                    <div className="cr-align-item">
                        <img src={Location} alt="location" />
                    </div>
                    <div className="rental-deals-info-div cr-flex-column">
                        <div className="rental-deals-title">Location</div>
                        <div className="rental-deals-timestamp">Search your location</div>
                    </div>
                </div>
                <div className="cr-flex-row cr-rental-deals-gap cr-rental-deals-tab">
                    <div className="cr-align-item">
                        <img src={Calendar} alt="calendar" />
                    </div>
                    <div className="rental-deals-info-div cr-flex-column">
                        <div className="rental-deals-title">Pickup date</div>
                        <div className="rental-deals-timestamp">Tue 15 Feb, 09:00</div>
                    </div>
                </div>
                <div className="cr-flex-row cr-rental-deals-gap cr-rental-deals-tab">
                    <div className="cr-align-item">
                        <img src={Calendar} alt="calendar" />
                    </div>
                    <div className="rental-deals-info-div cr-flex-column">
                        <div className="rental-deals-title">Return date</div>
                        <div className="rental-deals-timestamp">Thu 16 Feb, 11:00</div>
                    </div>
                </div>
                <div className="rental-deals-search-button cr-btn clickable" onClick={() => handleNavigation('/popularcars')}>
                    <div className="cr-btn-text">Search</div>
                </div>
            </div>
        </div>
    )
}

export default RentalDeals;
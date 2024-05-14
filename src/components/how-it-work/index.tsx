import React from 'react';
import '../../style/components/_how-it-work.css';

import LocationTick from '../../images/location-tick.svg';
import HowWorkCalander from '../../images/how-it-work-calendar.svg';
import HowWorkCar from '../../images/how-it-work-car.svg';
import Company from '../../images/company.svg';

const HowItWork: React.FC = () =>{
    return (
        <div className="how-it-work">
            <div className="how-it-work-flex-div">
                <div className="cr-align-item">
                    <div className="cr-title-tab">HOW IT WORK</div>
                </div>
                <div className="cr-txt-div">Rent with following 3 working steps</div>
                <div className="cr-flex how-it-work-flex">
                    <div className="how-it-work-tabs cr-flex-column">
                        <div className="how-it-work-icon">
                            <img src={LocationTick} alt="location-tick" />
                        </div>
                        <div className="cr-title-div">Choose Location</div>
                        <div className="how-it-work-info">Choose your and find your best car</div>
                    </div>
                    <div className="how-it-work-tabs cr-flex-column">
                        <div className="how-it-work-icon">
                            <img src={HowWorkCalander} alt="calendar" />
                        </div>
                        <div className="cr-title-div">Pick-up date</div>
                        <div className="how-it-work-info">Select your pick up date and time to book your car</div>
                    </div>
                    <div className="how-it-work-tabs cr-flex-column">
                        <div className="how-it-work-icon">
                            <img src={HowWorkCar} alt="car" />
                        </div>
                        <div className="cr-title-div">Book your car</div>
                        <div className="how-it-work-info">Book your car and we will deliver it directly to you</div>
                    </div>
                </div>
            </div>
            <div className="how-it-work-company">
                <img src={Company} alt="company" />
            </div>
        </div>
    )
}

export default HowItWork;
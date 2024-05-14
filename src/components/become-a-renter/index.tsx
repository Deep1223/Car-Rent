import React from 'react';
import '../../style/components/_become-a-renter.css';

import GoogleStore from '../../images/google play store.svg';
import AppStore from '../../images/app store.svg';
import BecomeRenterCar from '../../images/become renter car.svg';

const BecomeRenter: React.FC = () => {
    return (
        <div className="become-a-renter cr-flex">
            <div className="become-a-renter-div cr-flex-column">
                <div className="become-a-renter-title">Find, book and rent a car <span className="icon-color become-a-renter-txt-img">Easily</span></div>
                <div className="become-a-renter-desc">Get a car wherever and whenever you need it with your IOS and Android
                    device.</div>
                <div className="become-a-renter-download cr-flex-row">
                    <div className="become-a-renter-google-download">
                        <img src={GoogleStore} alt="google play store" className='clickable' />
                    </div>
                    <div className="become-a-renter-app-download">
                        <img src={AppStore} alt="app store" className='clickable' />
                    </div>
                </div>
            </div>
            <div className="become-a-renter-img">
                <img src={BecomeRenterCar} alt="become renter car" className="become-a-renter-img-div" />
            </div>
        </div>
    )
}

export default BecomeRenter;
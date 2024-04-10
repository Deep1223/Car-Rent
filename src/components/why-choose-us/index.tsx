import React from 'react';
import '../../style/components/_why-choose-us.css';

import Audi1 from '../../images/Audi 1.svg';
import UserTick from '../../images/why choose us user-tick.svg';
import Wallet from '../../images/why choose us wallet.svg';
import Support24 from '../../images/why choose us 24-support.svg';
import Message from '../../images/messages-2.svg';

const WhyChooseUs: React.FC = () =>{
    return (
        <div className="why-choose-us cr-flex">
            <div className="why-choose-us-image">
                <img src={Audi1} alt="Audi 1" />
            </div>
            <div className="why-choose-us-info">
                <div className="cr-align-item">
                    <div className="cr-title-tab">WHY CHOOSE US</div>
                </div>
                <div className="cr-txt-div">We offer the best experience with our rental deals</div>
                <div className="why-choose-us-info-flex-div">
                    <div className="why-choose-us-info-flex cr-flex-row">
                        <div className="why-choose-us-icon">
                            <img src={Wallet} alt="wallet" />
                        </div>
                        <div className="why-choose-us-info-div cr-flex-column">
                            <div className="cr-title-div">Best price guaranteed</div>
                            <div className="cr-desc-div">Find a lower price? We'll refund you 100% of the difference.</div>
                        </div>
                    </div>
                    <div className="why-choose-us-info-flex cr-flex-row">
                        <div className="why-choose-us-icon">
                            <img src={UserTick} alt="user-tick" />
                        </div>
                        <div className="why-choose-us-info-div cr-flex-column">
                            <div className="cr-title-div">Experience driver</div>
                            <div className="cr-desc-div">Don’t have driver? Don’t worry, we have many experienced driver for
                                you.</div>
                        </div>
                    </div>
                    <div className="why-choose-us-info-flex cr-flex-row">
                        <div className="why-choose-us-icon">
                            <img src={Support24} alt="24-support" />
                        </div>
                        <div className="why-choose-us-info-div cr-flex-column">
                            <div className="cr-title-div">24 hour car delivery</div>
                            <div className="cr-desc-div">Book your car anytime and we will deliver it directly to you.</div>
                        </div>
                    </div>
                    <div className="why-choose-us-info-flex cr-flex-row">
                        <div className="why-choose-us-icon">
                            <img src={Message} alt="messages-2" />
                        </div>
                        <div className="why-choose-us-info-div cr-flex-column">
                            <div className="cr-title-div">24/7 technical support</div>
                            <div className="cr-desc-div">Have a question? Contact Rentcars support any time when you have
                                problem.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;
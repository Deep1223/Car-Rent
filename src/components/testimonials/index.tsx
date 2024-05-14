import React from 'react';
import '../../style/components/_testimonial.css';

import Testimonial1 from '../../images/testimonial 1.svg';
import Star1 from '../../images/Star 1.svg';

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <div className="testimonial-flex-div">
                <div className="cr-align-item">
                    <div className="cr-title-tab">TESTIMONIALS</div>
                </div>
                <div className="testimonial-div-gap cr-flex-column">
                    <div className="cr-txt-div">What peole say about us?</div>
                    <div className='slider'>
                        <div className='slide-track'>
                            <div className="testimonial-tab cr-flex slide">
                                <div className="testimonial-tab-img">
                                    <img src={Testimonial1} alt="testimonial 1" />
                                </div>
                                <div className="testimonial-tab-info cr-flex-column">
                                    <div className="testimonial-tab-reating">
                                        <div className="testimonial-tab-text"><span className="testimonial-reating-txt">5.0 </span>stars
                                        </div>
                                        <div className="testimonial-tab-star">
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-tab-desc-div cr-flex-column">
                                        <div className="testimonial-tab-desc">
                                            “I feel very secure when using caretall's services. Your customer care team is very
                                            enthusiastic and the driver is always on time.”
                                        </div>
                                        <div className="testimonial-tab-desc-name-div">
                                            <div className="testimonial-tab-text">Charlie Johnson</div>
                                            <div className="testimonial-tab-place">From New York, US</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-tab cr-flex slide">
                                <div className="testimonial-tab-img">
                                    <img src={Testimonial1} alt="testimonial 1" />
                                </div>
                                <div className="testimonial-tab-info cr-flex-column">
                                    <div className="testimonial-tab-reating">
                                        <div className="testimonial-tab-text"><span className="testimonial-reating-txt">5.0 </span>stars
                                        </div>
                                        <div className="testimonial-tab-star">
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-tab-desc-div cr-flex-column">
                                        <div className="testimonial-tab-desc">
                                            “I feel very secure when using caretall's services. Your customer care team is very
                                            enthusiastic and the driver is always on time.”
                                        </div>
                                        <div className="testimonial-tab-desc-name-div">
                                            <div className="testimonial-tab-text">Charlie Johnson</div>
                                            <div className="testimonial-tab-place">From New York, US</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-tab cr-flex slide">
                                <div className="testimonial-tab-img">
                                    <img src={Testimonial1} alt="testimonial 1" />
                                </div>
                                <div className="testimonial-tab-info cr-flex-column">
                                    <div className="testimonial-tab-reating">
                                        <div className="testimonial-tab-text"><span className="testimonial-reating-txt">5.0 </span>stars
                                        </div>
                                        <div className="testimonial-tab-star">
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                            <img src={Star1} alt="start 1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-tab-desc-div cr-flex-column">
                                        <div className="testimonial-tab-desc">
                                            “I feel very secure when using caretall's services. Your customer care team is very
                                            enthusiastic and the driver is always on time.”
                                        </div>
                                        <div className="testimonial-tab-desc-name-div">
                                            <div className="testimonial-tab-text">Charlie Johnson</div>
                                            <div className="testimonial-tab-place">From New York, US</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;
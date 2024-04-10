import React from 'react';
import '../../style/components/_footer.css';

import FooterLogo from '../../images/footer-logo.svg';
import FooterLocation from '../../images/footer-location.svg';
import FooterContact from '../../images/footer-contact.svg';
import FooterEmail from '../../images/footer-email.svg';
import FooterFacebook from '../../images/facebook.svg';
import FooterInstagram from '../../images/instagram.svg';
import FooterYoutube from '../../images/youtube.svg';

const Footer: React.FC = () =>{
    return (
        <div className="footer">
            <div className="footer-div cr-flex-column">
                <div className="footer-flex cr-flex">
                    <div className="footer-info-div cr-flex-column">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="footer-logo" />
                        </div>
                        <div className="cr-footer-flex-div cr-flex-column">
                            <div className="cr-footer-icon cr-flex-row">
                                <div className="footer-location-icon">
                                    <img src={FooterLocation} alt="footer-location" />
                                </div>
                                <div className="cr-footer-txt cr-align-item">25566 Hc 1, Glenallen, Alaska, 99588, USA</div>
                            </div>
                            <div className="cr-footer-icon cr-flex-row">
                                <div className="footer-contact-icon">
                                    <img src={FooterContact} alt="footer-contact" />
                                </div>
                                <div className="cr-footer-txt cr-align-item">+603 4784 273 12</div>
                            </div>
                            <div className="cr-footer-icon cr-flex-row">
                                <div className="footer-email-icon">
                                    <img src={FooterEmail} alt="footer-email" />
                                </div>
                                <div className="cr-footer-txt cr-align-item">rentcars@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-list-div cr-flex">
                        <div className="cr-footer-list-column cr-flex-column">
                            <div className="cr-footer-txt-list-title cr-align-item">
                                Our Product
                            </div>
                            <div className="cr-footer-flex-list-div cr-flex-column">
                                <div className="cr-footer-txt">
                                    <a href="#">Career</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Car</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Package</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Features</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Priceline</a>
                                </div>
                            </div>
                        </div>
                        <div className="cr-footer-list-column cr-flex-column">
                            <div className="cr-footer-txt-list-title cr-align-item">
                                Resources
                            </div>
                            <div className="cr-footer-flex-list-div cr-flex-column">
                                <div className="cr-footer-txt">
                                    <a href="#">Download</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Help Center</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Guides</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Partner Network</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Cruises</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Developer</a>
                                </div>
                            </div>
                        </div>
                        <div className="cr-footer-list-column cr-flex-column">
                            <div className="cr-footer-txt-list-title cr-align-item">
                                About Rentcars
                            </div>
                            <div className="cr-footer-flex-list-div cr-flex-column">
                                <div className="cr-footer-txt">
                                    <a href="#">Why choose us</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Our Story</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Investor Relations</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Press Center</a>
                                </div>
                                <div className="cr-footer-txt">
                                    <a href="#">Advertise</a>
                                </div>
                            </div>
                        </div>
                        <div className="cr-footer-list-column cr-flex-column">
                            <div className="cr-footer-txt-list-title cr-align-item">
                                Follow Us
                            </div>
                            <div className="footer-social-list cr-flex-row">
                                <div className="footer-icon"><a href='#'><img src={FooterFacebook} alt="facebook" /></a></div>
                                <div className="footer-icon"><a href='#'><img src={FooterInstagram} alt="instagram" /></a></div>
                                <div className="footer-icon"><a href='#'><img src={FooterYoutube} alt="youtube" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="footer-header-div" />
                    <div className="footer-copyright">Copyright 2023 ・ Rentcars, All Rights Reserved</div>
                </div>
            </div>
        </div>
    )

}

export default Footer;
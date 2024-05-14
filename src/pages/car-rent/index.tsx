import React, { lazy } from 'react';
import '../../style/pages/_car-rent.css';
import '../../style/base/_common.css';

import BackgroundGroup from '../../images/background-group.svg';
import Triangle from '../../images/triangle.svg';
import ComaRight from '../../images/double coma right.svg';
import ComaLeft from '../../images/double coma left.svg';

const BecomeRender = lazy(() => import('../../components/become-a-renter'));
const RenderDeals = lazy(() => import('../../components/rental-deals'));
const HowItWork = lazy(() => import('../../components/how-it-work'));
const WhyChooseUs = lazy(() => import('../../components/why-choose-us'));
const PopularRentalDeals = lazy(() => import('../../components/popular-rental-deals'));
const Testimonial = lazy(() => import('../../components/testimonials'));
const WebDownload = lazy(() => import('../../components/web-download'));
const Footer = lazy(() => import('../../common/footer'));

const CarRent: React.FC = () => {
    return (
        <div>
            <img src={BackgroundGroup} alt="background-group" className="cr-background-group" />
            <BecomeRender />
            
            <RenderDeals />
            
            <HowItWork />
            
            <img src={Triangle} alt="triangle" className="why-choose-us-triangle" />
            
            <WhyChooseUs />
            
            <PopularRentalDeals />
            
            <div className="testimonial-coma-img cr-flex">
                <img src={ComaRight} alt="double coma right" />
                <div>
                    <div className="testimonial-left-coma-img">
                        <img src={ComaLeft} alt="double coma left" />
                    </div>
                </div>
            </div>
            
            <Testimonial />
            
            <img src={Triangle} alt="triangle" className="web-download-triangle" />
            
            <WebDownload />
        </div>
    )

}

export default CarRent;
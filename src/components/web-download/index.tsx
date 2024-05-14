import React from 'react';
import '../../style/components/_web-download.css';

import AppStore from '../../images/app store.svg';
import GoogleStore from '../../images/google play store.svg';
import Iphone14 from '../../images/iPhone 14 Pro Space.svg';

const WebDownload: React.FC = () =>{
    return (
        <div className="web-download cr-flex">
        <div className="web-download-txt-div cr-flex-column">
            <div className="cr-align-item">
                <a href="/pdf/file-sample.pdf" download><div className="cr-title-tab">DOWNLOAD</div></a>
            </div>
            <div className="web-download-flex-div cr-flex-column">
                <div className="web-download-desc">Download Rentcars App for <span className="icon-color">FREE</span></div>
                <div className="web-download-info">For faster, easier booking and exclusive deals.</div>
                <div className="web-download-download cr-flex-start">
                    <div className="web-download-google-download">
                        <img src={GoogleStore} alt="google play store" className='clickable' />
                    </div>
                    <div className="web-download-app-download">
                        <img src={AppStore} alt="app store" className='clickable' />
                    </div>
                </div>
            </div>
        </div>
        <div className="web-download-img-div">
            <img src={Iphone14} alt="iPhone 14 Pro Space" />
        </div>
    </div>
    )
}

export default WebDownload;
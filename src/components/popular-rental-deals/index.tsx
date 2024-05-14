import React, { startTransition, useState, useEffect } from 'react';
import '../../style/components/_popular-rental-deals.css';
import CarRentModalForm from '../../components/car-renter-list-model'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Jaguar from '../../images/jaguar.svg';
import Star1 from '../../images/Star 1.svg';
import User from '../../images/user.svg';
import Gear from '../../images/gear.svg';
import Ac from '../../images/ac.svg';
import CarDoor from '../../images/car-door.svg';
import Lambo from '../../images/lambo.svg';
import Bmw from '../../images/bmw.svg';
import ArrowRight from '../../images/arrow-right.svg';
import ArrowRightBlack from '../../images/arrow-right-black.svg';

const PopularRentalDeals: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        pickupLocation: '',
        pickupHour: '',
        dropoffLocation: '',
        dropoffDate: '',
        dropoffHour: '',
        pickupDate: new Date().toISOString().slice(0, 10), // Set default to today
    });
    const [fetchdata, setFetchData] = useState<any[]>([]);

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        startTransition(() => {
            navigate(path);
            window.scrollTo(0, 0);
        });
    };

    // Function to open modal
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Function to handle form input change
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
    };

    useEffect(() => {
        fetchWorkingStepData();
    }, []);

    const fetchWorkingStepData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/carmaster');
            setFetchData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="popular-rental-deals cr-flex-column">
            <div className="popular-rental-deals-margin">
                <div className="popular-rental-deals-title cr-align-item">
                    <div className="cr-title-tab">POPULAR RENTAL DEALS</div>
                </div>
                <div className="popular-rental-deals-div cr-flex-column">
                    <div className="cr-txt-div">Most popular cars rental deals</div>

                    <div className="popular-rental-deals-tab cr-flex">
                        {fetchdata && fetchdata.length > 0 ? (
                            fetchdata.slice(0, 3).map((data, index) => (
                                <div className="popular-rental-deals-cars" key={index}>
                                    <div className="popular-rental-deals-img">
                                        <img src="/car-rent/admin/public/images/2024/05/car-list/1715089252899625997_Hyundai Verna.png" alt={data.name} />
                                    </div>
                                    <div className="popular-rental-deals-info cr-flex-column">
                                        <div className="populer-rental-deals-info-div cr-flex-column">
                                            <div className="popular-rental-deals-info-title">{data.name}</div>
                                            <div className="popular-rental-deals-info-reating cr-align-item">
                                                <img src={Star1} alt="start 1" />
                                                <div className="cr-reating-text">4.8 <span className="cr-reviews-text">(2.436
                                                    reviews)</span></div>
                                            </div>
                                        </div>
                                        <div className="popular-rental-deals-car-div">
                                            <div className="popular-rental-deals-flex cr-flex-start">
                                                <div className="popular-rental-deals-feature-div cr-flex-row">
                                                    <div className="cr-align-item">
                                                        <img src={User} alt="user" />
                                                    </div>
                                                    <div className="cr-feature-text">{data.passengers} Passangers</div>
                                                </div>
                                                <div className="popular-rental-deals-feature-div cr-flex-row">
                                                    <div className="cr-align-item">
                                                        <img src={Gear} alt="gear" />
                                                    </div>
                                                    <div className="cr-feature-text">{data.gear}</div>
                                                </div>
                                                <div className="popular-rental-deals-feature-div cr-flex-row">
                                                    <div className="cr-align-item">
                                                        <img src={Ac} alt="ac" />
                                                    </div>
                                                    <div className="cr-feature-text">{data.coolingtype}</div>
                                                </div>
                                                <div className="popular-rental-deals-feature-div cr-flex-row">
                                                    <div className="cr-align-item">
                                                        <img src={CarDoor} alt="car-door" />
                                                    </div>
                                                    <div className="cr-feature-text">{data.doorstype} Doors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popular-rental-deals-price-info cr-flex-column">
                                            <div className="popular-rental-deals-price-div cr-flex">
                                                <div className="cr-price-txt">Price</div>
                                                <div className="cr-price-amt">${data.price} <span className="price-day">/ day</span></div>
                                            </div>
                                            <div className="popular-rental-deals-rent-btn">
                                                <a href="javascript:void(0)" onClick={openModal}>
                                                    <div className="popular-rental-deals-rent-div cr-btn cr-flex-row">
                                                        <div className="cr-btn-text">Rent Now</div>
                                                        <div className="popular-rental-deals-rent-btn-img cr-align-item">
                                                            <img src={ArrowRight} alt="arrow-right" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}

                    </div>

                    <div className="popular-rental-deals-center-align cr-flex-center">
                        <a href="javascript:void(0)" onClick={() => handleNavigation('/popularcars')}>
                            <div className="popular-rental-deals-show-all-div">
                                <div className="popular-rental-deals-show-all-flex cr-flex-row">
                                    <div className="popular-rental-deals-show-all-txt cr-align-item">Show all vehicles</div>
                                    <div className="popular-rental-deals-show-all-img cr-align-item">
                                        <img src={ArrowRightBlack} alt="arrow-right-black" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <CarRentModalForm
                showModal={showModal}
                closeModal={closeModal}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default PopularRentalDeals;
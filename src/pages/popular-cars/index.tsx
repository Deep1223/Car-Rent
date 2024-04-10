import React, { startTransition, useState } from 'react';
import '../../style/pages/_popular-cars.css';
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

const PopularRentalDeals: React.FC = () => {
    const [showModal, setShowModal] = useState(false); // State variable to manage modal visibility
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
        // Process form data as needed
        console.log(formData);
        // Close modal after form submission
        closeModal();
    };

    return (
        <div className="popular-rental-deals cr-flex-column">
            <div className="popular-rental-deals-margin-div">
                <div className="popular-rental-deals-flex-div cr-flex-column">
                    <div className="cr-txt-div">Most popular cars rental deals</div>

                    <div className="popular-rental-deals-tab cr-flex">
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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

                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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

                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                        <div className="popular-rental-deals-cars">
                            <div className="popular-rental-deals-img">
                                <img src={Jaguar} alt="jaguar" />
                            </div>
                            <div className="popular-rental-deals-info cr-flex-column">
                                <div className="populer-rental-deals-info-div cr-flex-column">
                                    <div className="popular-rental-deals-info-title">jaguar XE P250</div>
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
                                            <div className="cr-feature-text">4 Passangers</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Gear} alt="gear" />
                                            </div>
                                            <div className="cr-feature-text">Auto</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={Ac} alt="ac" />
                                            </div>
                                            <div className="cr-feature-text">Air Conditioning</div>
                                        </div>
                                        <div className="popular-rental-deals-feature-div cr-flex-row">
                                            <div className="cr-align-item">
                                                <img src={CarDoor} alt="car-door" />
                                            </div>
                                            <div className="cr-feature-text">4 Doors</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-rental-deals-price-info cr-flex-column">
                                    <div className="popular-rental-deals-price-div cr-flex">
                                        <div className="cr-price-txt">Price</div>
                                        <div className="cr-price-amt">$1,800 <span className="price-day">/ day</span></div>
                                    </div>
                                    <div className="popular-rental-deals-rent-btn">
                                        <a href="javaScript:void(0)" onClick={openModal}>
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
                    </div>
                </div>
            </div>

           {/* Modal */}
           {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="car-rent-form-title">Rent Car</span>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <div className="cr-flex-column cr-car-rent-form-gap">
                                <div className="cr-car-rent-info cr-flex-column">
                                    <div className="cr-car-rent-form-size-div">
                                        <div className='cr-flex-column cr-car-rent-form-row-gap'>
                                            <label>Name</label>
                                            <input type="text" className='input-box-div input-box-div-width' name="name" value={formData.name} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className='cr-car-rent-form-size-div'>
                                        <div className='cr-flex-column cr-car-rent-form-row-gap'>
                                            <label>Email</label>
                                            <input type="email" className='input-box-div input-box-div-width' name="email" value={formData.email} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className='cr-car-rent-form-size-div'>
                                        <div className='cr-flex-column cr-car-rent-form-row-gap'>
                                            <label>Mobile Number</label>
                                            <input type="tel" className='input-box-div input-box-div-width' name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className='cr-car-rent-form-size-div'>
                                        <div className='cr-flex-column cr-car-rent-form-row-gap'>
                                            <label>Pickup Location</label>
                                            <textarea
                                                className='input-box-div'
                                                name="pickupLocation"
                                                value={formData.pickupLocation}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='cr-flex cr-car-rent-form-size-div'>
                                        <div className='cr-flex-column cr-car-rent-form-size cr-car-rent-form-row-gap'>
                                            <label>Pickup Date</label>
                                            <input
                                                type="date"
                                                className='input-box-div-half'
                                                name="pickupDate"
                                                value={formData.pickupDate}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().slice(0, 10)} // Set minimum date to today
                                            />
                                        </div>
                                        <div className='cr-flex-column cr-car-rent-form-size cr-car-rent-form-row-gap'>
                                            <label>Drop-off Date</label>
                                            <input
                                                type="date"
                                                className='input-box-div-half'
                                                name="dropoffDate"
                                                value={formData.dropoffDate}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().slice(0, 10)} // Set minimum date to today
                                            />
                                        </div>
                                    </div>
                                    <div className='cr-flex cr-car-rent-form-size-div'>
                                        <div className='cr-flex-column cr-car-rent-form-size cr-car-rent-form-row-gap'>
                                            <label>Pickup Hour</label>
                                            <input
                                                type="time"
                                                className='input-box-div-half'
                                                name="pickupHour"
                                                value={formData.pickupHour}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className='cr-flex-column cr-car-rent-form-size cr-car-rent-form-row-gap'>
                                            <label>Drop-off Hour</label>
                                            <input
                                                type="time"
                                                className='input-box-div-half'
                                                name="dropoffHour"
                                                value={formData.dropoffHour}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className='cr-btn-text cr-btn cr-car-rent-btn cr-flex-center clickable'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopularRentalDeals;

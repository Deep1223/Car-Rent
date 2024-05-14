import React from 'react';

interface CarRentModalFormProps {
    showModal: boolean;
    closeModal: () => void;
    formData: any;
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CarRentModalForm: React.FC<CarRentModalFormProps> = ({ showModal, closeModal, formData, handleInputChange, handleSubmit }) => {
    return (
        <>
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
                                    {/* Add other input fields as needed */}
                                    <button type="submit" className='cr-btn-text cr-btn cr-car-rent-btn cr-flex-center clickable'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default CarRentModalForm;

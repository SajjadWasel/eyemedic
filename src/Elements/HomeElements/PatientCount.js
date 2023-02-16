import React from 'react';
import './PatientCount.css';

const PatientCount = () => {
    return (
        <div>
            <h1 data-aos="zoom-in-down" className='heading text-center mt-5'>
                <span className="text_orangered_span">
                    Patient Count
                </span>
            </h1>
            <div className="patient_count">
                <div data-aos="fade-right">
                    <h1>404</h1>
                    <h3>Kids</h3>
                </div>
                <div data-aos="flip-up">
                    <h1>595</h1>
                    <h3>Men</h3>
                </div>
                <div data-aos="fade-left">
                    <h1>78</h1>
                    <h3>Women</h3>
                </div>
            </div>
        </div>
    );
};

export default PatientCount;
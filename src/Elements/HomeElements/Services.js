import React, { useEffect, useState } from 'react';
import SingleService from '../ServiceElements/SingleService';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='display-flex align-items-center mt-5 services'>
            <h1 className='heading text-center'><span className="text_orangered_span" data-aos="zoom-in">Our Services</span></h1>

            {/* ==========Main Service Cards */}
            <div className='d-flex container mt-5 flex-wrap'>

                {
                    services?.services?.map(service => (
                        <SingleService key={service.id} service={service}></SingleService> 
                    ))
                }

            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleServicePage.css';

const SingleServicePage = () => {

    let { serviceId } = useParams();


    let [service, setService] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data.services[serviceId]))
    }, [])



    return (
        <div className='single-service d-flex justify-content-center align-items-center'>
            <div data-aos="fade-up" className='single-service-card d-flex align-items-center'>
            <img src="https://i.ibb.co/nzwfzsb/bg-3.png" alt="" />
            <div className=''>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <button className='btn-custom'>Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default SingleServicePage;
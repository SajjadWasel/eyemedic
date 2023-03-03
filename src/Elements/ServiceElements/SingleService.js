import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { name, description, image, id } = service;


    return (
        <div data-aos="fade-up" className='service-card d-flex'>
            <img src="https://i.ibb.co/nzwfzsb/bg-3.png" alt="" />
            <div className='pt-3'>
                <h4>{name}</h4>
                <p>{description}</p>
                <Link to={`/services/${id}`}>
                    <button className='btn-custom'>Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;
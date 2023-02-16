import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div data-aos="fade-up" className='footer d-flex justify-content-around'>
            <div>
                <h1 className='mb-3'>Eyemedic</h1>
                <div>
                    <p>Road No.5</p>
                    <p>Mirpur DOHS</p>
                    <p>Dhaka,</p>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className='mt-5'>
                <h3>Pages</h3>
                <div>
                    <p>Road No.5</p>
                    <p>Mirpur DOHS</p>
                    <p>Dhaka,</p>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className='mt-5'>
                <h4>Subscribe To Our Newsletter</h4>
                <div>
                    <input class="form-control mt-3" type="text" placeholder="Enter Email" aria-label="default input example"/>
                    <button className='btn-custom-outline mt-3'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Footer;
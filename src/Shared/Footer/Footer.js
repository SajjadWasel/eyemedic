import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div data-aos="fade-up" className='footer d-flex justify-content-around'>
            <div>
                <h1 className='footer_logo mb-4'><b><span>Eye</span>medic</b></h1>
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
                    <input className="form-control mt-3" type="text" placeholder="Enter Email" aria-label="default input example" />
                    <button className='btn-custom-outline border-white mt-3'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Footer;
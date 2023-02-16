import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className='why_choose_us container mt-5'>
            <div data-aos="fade-down-right" className='w-50'>
                <h1 className='heading pb-3'>
                    <span className="text_orangered_span">Why Choose Us</span>
                </h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia quis ipsa, commodi fuga nemo soluta debitis harum minima est. Aliquid, asperiores inventore nemo repellendus aspernatur ipsam enim facilis eaque! Ipsam laboriosam id impedit nam inventore iusto ut, velit doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia quis ipsa, commodi fuga nemo soluta debitis harum minima est. Aliquid, asperiores inventore nemo repellendus aspernatur ipsam enim facilis eaque! Ipsam laboriosam id impedit nam inventore iusto ut, velit doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia quis ipsa, commodi fuga nemo soluta debitis harum minima est.</p>
                <button className='btn-custom me-3'>Get Consulting</button>
                <button className='btn-custom-outline'>See Services</button>
            </div>
            <div data-aos="zoom-out">
                <img src="https://i.ibb.co/CV0JTKr/choose.png" alt="" />
            </div>
        </div>
    );
};

export default WhyChooseUs;
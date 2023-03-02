import React from 'react';
import './HeroSection.css';
import Form from 'react-bootstrap/Form';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {
    return (
        <div className='hero_section mt-5 pt-2'>

            <div className='hero_section_flex container'>
                <div>
                    <h1 className="hero-text mt-4">
                        WE ARE THE BEST
                        <span className='text_orangered_span'>
                            HOSPITAL UNDER
                        </span>
                        BANGLADESH FOR
                        <Typewriter
                            options={{
                                strings: ['Eye Care', 'Eye Surgery', 'Eye Medicine'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>




                    {/* ================ Main Text Ends ========== */}
                    <Form.Group className="hero-form my-3" controlId="formGroupEmail">
                        <Form.Control size="lg" type="email" placeholder="Enter Your Email Here" />
                    </Form.Group>

                    <button className='form-btn btn-custom me-3'>Book A Free Consultency Now</button>

                    <button className='form-btn btn-custom-outline'>Sign Up</button>
                </div>

                <div>
                    {/* <img src="https://i.ibb.co/t3fDgjS/hero-img.png" alt="" /> */}
                    {/* <img src="https://i.ibb.co/fxZ0479/Capturejj.png" alt="" /> */}
                    {/* <img src="https://i.ibb.co/r39s6KN/sni.png" alt="" /> */}
                    {/* <img src="https://i.ibb.co/JK5ffMZ/ssiel.png" alt="" /> */}
                    <img src="https://i.ibb.co/rGdq2fN/heroimg.png" alt="" />
                </div>
            </div>


            <div className="hero_section_services_frame">
                <div className="hero_section_services">
                    <div>
                        <h3>Lorem ipsum dolor sit dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae ut quod veniam. Eum, totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit architecto eius rem nesciunt aliquid.</p>
                    </div>
                    <div>
                        <h3>Lorem ipsum dolor sit dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae ut quod veniam. Eum, totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit architecto eius rem nesciunt aliquid.</p>
                    </div>
                    <div>
                        <h3>Lorem ipsum dolor sit dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae ut quod veniam. Eum, totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore impedit architecto eius rem nesciunt aliquid.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
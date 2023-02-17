import React from 'react';
import { Link } from 'react-router-dom';
import AboutRows from '../../Elements/AboutElements/AboutRows';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="page_header">
                <h1 className='text-center text-white'>About Eyemedic</h1>
            </div>

            <div className='container mb-5 text-center'>
                <h1 className='heading text-center mt-5'><span className="text_orangered_span" data-aos="zoom-in">Who We Are?</span></h1>
                <p className="text-center text-secondary mt-4 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit fugit doloremque magnam, saepe velit fuga, unde aliquid earum tempore at sunt non, quod obcaecati esse amet neque iure veniam repellendus mollitia expedita dignissimos pariatur! Saepe molestiae possimus sint recusandae fuga. Perferendis voluptate in libero odio modi alias labore nemo rerum delectus suscipit voluptatum aut illo beatae, at voluptatem aperiam doloremque inventore? Maxime velit temporibus perferendis optio amet ratione. Ullam fuga cupiditate blanditiis dicta error. Porro architecto delectus nam maiores facere harum quas numquam illo, ex inventore dolores eaque nisi ipsam odio suscipit ratione, omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut. omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut. omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut.</p>
                <button className="btn-custom">Check Our Portfolio</button>
                <Link to='/services'>
                    <button className="btn-custom-outline ms-3">Check Our Services</button>
                </Link>
            </div>

            <div className='vision py-5'>
                <div className='container'>
                    <h1 className='heading text-center mt-3'>Our Vision</h1>
                    <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit fugit doloremque magnam, saepe velit fuga, unde aliquid earum tempore at sunt non, quod obcaecati esse amet neque iure veniam repellendus mollitia expedita dignissimos pariatur! Saepe molestiae possimus sint recusandae fuga. Perferendis voluptate in libero odio modi alias labore nemo rerum delectus suscipit voluptatum aut illo beatae, at voluptatem aperiam doloremque inventore? Maxime velit temporibus perferendis optio amet ratione. Ullam fuga cupiditate blanditiis dicta error. Porro architecto delectus nam maiores facere harum quas numquam illo, ex inventore dolores eaque nisi ipsam odio suscipit ratione, omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut. omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut. omnis quis sit eligendi iste officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, ut.</p>
                </div>
            </div>

            <AboutRows></AboutRows>

        </div>
    );
};

export default About;
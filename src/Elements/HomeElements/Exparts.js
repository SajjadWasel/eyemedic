import React from 'react';
import './Exparts.css';

const Exparts = () => {
    return (
        <div className='exparts float-end'>
            <div data-aos="fade-up-right"  className='ms-5'>
                <h1 className='heading'><span className="text_orangered_span" data-aos="zoom-in">Our Exparts</span></h1>
                <p className="text-secondary fs-5 mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime explicabo excepturi a aut rem. Quaerat at adipisci voluptatem minima temporibus? Corrupti obcaecati quaerat quis illo sit temporibus veniam facilis ab tempora quod. Temporibus optio repudiandae dolore distinctio culpa autem nesciunt eveniet voluptatem dolor dignissimos aspernatur a tempora soluta quia at eligendi fugiat commodi sunt fugit exercitationem iure, hic nobis! Qui, eos ipsum officia maiores ea optio quia officiis maxime non esse nobis harum deserunt dolorem labore libero voluptatem ab tempore nesciunt? Vel assumenda iste facere deleniti, iusto eos.</p>
                <button className="btn-custom">See All Doctors</button>
                <button className="btn-custom-outline ms-3">Book Consultency Now</button>
            </div>
            <div data-aos="fade-up">
                <img src="https://i.ibb.co/pLyPd9s/snid.png" alt="" />
            </div>
        </div>
    );
};

export default Exparts;
import React from 'react';
import Exparts from '../../Elements/HomeElements/Exparts';
import HeroSection from '../../Elements/HomeElements/HeroSection';
import PatientCount from '../../Elements/HomeElements/PatientCount';
import Quote from '../../Elements/HomeElements/Quote';
import Services from '../../Elements/HomeElements/Services';
import Testimonial from '../../Elements/HomeElements/Testimonial';
import WhyChooseUs from '../../Elements/HomeElements/WhyChooseUs';
import Footer from '../../Shared/Footer/Footer';
import Login from '../../Shared/Login/Login';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Exparts></Exparts>
            <Testimonial></Testimonial>
            <Services></Services>
            <PatientCount></PatientCount>
            <Quote></Quote>
            <WhyChooseUs></WhyChooseUs>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home;
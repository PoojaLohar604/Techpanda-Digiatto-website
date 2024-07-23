import React from 'react';
import './Services.css';
import NavbarTab from '../NavbarPage/NavbarTab';
import Footer from '../Footer/Footer';
import Contact from '../AboutUs/ContactExperts/Contact';
import Ourservices from '../Services/OurServices/Ourservices';
import Scrollerservices  from '../Services/ServicesScroller/Scrollerservices';
import Techstack from '../Services/TechStack/Techstack';
import Digital from '../Services/DigitalAutomation/Digital';

const Services = () => {
  return (
    <>
    <div className='services-page-container'>
    <NavbarTab/>
    <Ourservices />
    <Scrollerservices />
    <Techstack />
    <Digital />
    <Contact /><br></br>
    <Footer />
    </div>
    </>
  )
}

export default Services
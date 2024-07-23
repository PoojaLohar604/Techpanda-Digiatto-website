import React from 'react';
import './Industries.css';
import NavbarTab from '../NavbarPage/NavbarTab';
import Contact from '../AboutUs/ContactExperts/Contact';
import Footer from '../Footer/Footer';
import Industriestext from '../Industries/Industriestext/Industriestext';
import Serve from '../Industries/WeServe/Serve';

const Industries = () => {
  return (
    <div className='industries-main-page-container'>
     <NavbarTab />
     <Industriestext />
     <Serve />
     <Contact />
     <Footer />
    </div>
  )
}

export default Industries
import React from 'react'
import './About.css';
import NavbarTab from '../NavbarPage/NavbarTab';
import Partner from '../AboutUs/Partner/Partner';
import Excellence from '../AboutUs/Excellence/Excellence';
import Clients from '../AboutUs/WorldClients/Clients';
import Scoller from '../HomePage/Scroller/Scroller';
import Discuss from '../HomePage/DiscussSection/Discuss';
import Contact from '../AboutUs/ContactExperts/Contact';
import Footer  from '../Footer/Footer'


const About = () => {

  return (
    <>
    <div className='about-page-container'>
    <NavbarTab/>
    <Partner />
    <Excellence />
    <Clients />
    <Scoller />
    <Discuss />
    <Contact />
    <Footer  />
    </div>
    </>
  )
}

export default About
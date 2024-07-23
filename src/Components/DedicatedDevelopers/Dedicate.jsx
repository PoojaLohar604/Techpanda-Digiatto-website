import React from 'react';
import './Dedicate.css';
import NavbarTab from '../NavbarPage/NavbarTab';
import Team from '../DedicatedDevelopers/Team/Team';
import Contact from '../AboutUs/ContactExperts/Contact';
import Footer from '../Footer/Footer';
import Innovation from '../DedicatedDevelopers/Innovation/Innovation';
import Hire from '../DedicatedDevelopers/HireDevelopers/Hire';

const Dedicate = () => {
  return (
    <div className='dedicate-page-container'>
     <NavbarTab />
     <Team />
     <Innovation />
     <Hire />
     <Contact />
     <Footer />
    </div>
  )
}

export default Dedicate
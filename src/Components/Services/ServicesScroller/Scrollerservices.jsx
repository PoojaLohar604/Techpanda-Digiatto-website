import React from 'react';
import './Scrollerservices.css';

const Scrollerservices = () => {
  return (
    <div className='container-fluid scroller'>
  
      <marquee loop=' ' direction='right'>
        <div className='scroller-content'>
          <div className='scroller-items  services-text'>
            <h5>MOBILE APP DEVELOPMENT</h5>
          </div>
          <div className='scroller-items services-text'>
             <h5>WEB DEVELOPMENT</h5>
          </div>
          <div className='scroller-items services-text'>
            <h5>HIRE DEDICATED TEAMS</h5>
          </div>
          <div className='scroller-items  services-text'>
            <h5>UI/UX DESING & DEVELOPMENT</h5>
          </div>
          <div className='scroller-items  services-text'>
            <h5>MOBILE APP DEVELOPMENT</h5>
          </div>
          <div className='scroller-items services-text'>
             <h5>WEB DEVELOPMENT</h5>
          </div>
          <div className='scroller-items services-text'>
            <h5>HIRE DEDICATED TEAMS</h5>
          </div>
          <div className='scroller-items  services-text'>
            <h5>UI/UX DESING & DEVELOPMENT</h5>
          </div>
          
          
        </div>
      </marquee>
       
    </div>
  )
}

export default Scrollerservices
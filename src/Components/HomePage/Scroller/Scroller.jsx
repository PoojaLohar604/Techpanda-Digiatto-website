import React from 'react';
import './Scroller.css';
import Layers from '../../../Assets/Layers.jpg';
import HourGlass from '../../../Assets/HourGlass.jpg';
import Sisyphus from '../../../Assets/Sisyphus.jpg';
import CloudWatch from '../../../Assets/CloudWatch.jpg';

const Scoller = () => {
  return (
    <div className='container-fluid scroller'>
  
      <marquee loop=' ' direction='right'>
        <div className='scroller-content'>
          <div className='scroller-items'>
            <img src={Layers} alt=''/>
            <h5>Layers</h5>
          </div>
          <div className='scroller-items'>
            <img src={Sisyphus} alt=''/>
            <h5>Sisyphus</h5>
          </div>
          <div className='scroller-items'>
            <img src={HourGlass} alt=''/>
            <h5>HourGlass</h5>
          </div>
          <div className='scroller-items'>
            <img src={CloudWatch} alt=''/>
            <h5>CloudWatch</h5>
          </div>
          <div className='scroller-items'>
            <img src={Layers} alt=''/>
            <h5>Layers</h5>
          </div>
          <div className='scroller-items'>
            <img src={Sisyphus} alt=''/>
            <h5>Sisyphus</h5>
          </div>  
          <div className='scroller-items'>
            <img src={HourGlass} alt=''/>
            <h5>HourGlass</h5>
          </div>
          <div className='scroller-items'>
            <img src={CloudWatch} alt=''/>
            <h5>CloudWatch</h5>
          </div>
        </div>
      </marquee>
       
    </div>
  )
}

export default Scoller
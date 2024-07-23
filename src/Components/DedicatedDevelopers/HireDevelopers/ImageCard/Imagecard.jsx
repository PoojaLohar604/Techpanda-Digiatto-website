import React from 'react';
import './Imagecard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hirecard from '../../HireCard/Hirecard';
import angularimg from '../../../../Assets/angularimg.png';
import mimage from '../../../../Assets/mimage.png';
import vimage from '../../../../Assets/vimage.png';
import reactimg from '../../../../Assets/reactimg.png';
import  devops from '../../../../Assets/devops.png';
import software from '../../../../Assets/software.png';
import  hireimage from '../../../../Assets/hireimage.png';
import pngwing1 from '../../../../Assets/pngwing 1.png';
import  dev from '../../../../Assets/dev.png';
import mern from '../../../../Assets/mern.png';
import blockchain from '../../../../Assets/blockchain.png';
import showphone from '../../../../Assets/showphone.png';



const Imagecard = () => {
  return (
    <div className='imagecard-content'>
      <Row>
        <Col lg={8} md={8} sm={6} className='center-image'>
        <div className='hire-image'>
            <img src={hireimage} />
        </div>
        </Col>
        <Col lg={4} md={4} sm={6}>
        <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={pngwing1}/>
        </div>
        </Col>
      </Row>
      <div className="hire-developers-card">
            <div className="hire-developers-card-row-one">
                <Row>
                    
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={reactimg}/>
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire NodeJS Developer" image={angularimg}/>   
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire Python Developer" image={vimage}/> 
                    </div>
                    </Col>
             
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire iOS Developer" image={devops}/>
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire Android Developer" image={software}/>   
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire React  Developer" image={mimage}/> 
                    </div>
                    </Col>
                </Row>
            </div>
      </div>
      <div className='showphone-card-and-image'>
         <Row>
          <Col lg={4} md={4} sm={5}>
          <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={mern}/>
          </div>
          <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={blockchain}/>
          </div>
          <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={dev}/>
          </div>
          </Col>
          <Col lg={1} md={1} sm={1}></Col>
          <Col lg={7} md={7} sm={6} className='center-image'>
          <div className='showphone-image-one'>
            <img src={showphone}/>
          </div>
          <div className='showphone-image-two'>
          <img src={showphone}/>
          </div>
          </Col>
         </Row>
      </div>
    </div>
   
  )
}

export default Imagecard
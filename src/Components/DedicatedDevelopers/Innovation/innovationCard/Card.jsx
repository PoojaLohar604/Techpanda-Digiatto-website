import React from 'react'
import './Card.css';

const Card = ({title,details}) => {
  return (
    <div className='innovation-main-card'>
        <h5>{title}</h5>
        <p>{details}</p>
    </div>
  )
}

export default Card
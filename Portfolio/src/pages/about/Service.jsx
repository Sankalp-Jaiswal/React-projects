import React from 'react'

const Service = ({title,icon,description}) => {
  return (
    <li className='service-item'>
        <div className='service-icon-box'>
            <img width="40" src={icon} alt="" />
        </div>
        <div className='service-content-box'>
            <h4 className='service-item-title h4'>{title}</h4>
            <p className='service-item-text'>{description}</p>
        </div>
    </li>
  )
}

export default Service
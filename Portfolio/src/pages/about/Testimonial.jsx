import React from 'react'

const Testimonial = ({name,avatar,testimonial}) => {
  return (
    <li className='testimonials-item'>
        <div className='content-card'>
            <figure className='testimonials-avatar-box'>
                <img width="60" src={avatar} alt="" />
            </figure>
            <h4 className='h4 testimonials-item-title'>{name}</h4>
            <div className='testimonials-text'>
                <p >{testimonial}</p>
            </div>
        </div>
    </li>
  )
}

export default Testimonial
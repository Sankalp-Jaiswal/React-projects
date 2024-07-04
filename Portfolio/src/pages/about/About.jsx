import React, { useEffect, useState } from 'react'
import Service from './Service'
import Testimonial from './Testimonial'

const serviceData = [
    {
      "title": "Web design",
      "icon": "/images/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Mobile apps",
      "icon": "/images/icon-app.svg",
      "description": "Professional development of applications for iOS and Android."
    },
    {
      "title": "Photography",
      "icon": "/images/icon-photo.svg",
      "description": "I make high-quality photos of any category at a professional level."
    }
]

const About = () => {

    const [testimonials, setTestimonials] = useState([])
    useEffect(()=>{
        fetch('testimonials.json').then(res => res.json()).then(data=>{
            setTestimonials(data)
        })
    },[])
    console.log(testimonials)

  return (
    <div className="about active">
        <header>
            <h2 className='h2 article-title'>About Me</h2>
        </header>
        <section className='about-text'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente rem ratione laudantium corporis illum eum? Voluptate mollitia placeat, earum adipisci eos aperiam modi magni id ea magnam doloribus et veritatis.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ducimus porro animi, eveniet laborum velit nesciunt doloremque ipsa, similique alias ad omnis minima! Veritatis possimus debitis dolorum esse molestiae quidem.</p>
        </section>
        {/* services   */}
        <section className='service'>
            <h2 className='h3 service-title'>What I'm Doing</h2>
            <ul className='service-list'>
                {
                    serviceData.map((item, index) => (
                        <Service key={index} title={item.title} icon={item.icon} description={item.description} />
                    ))
                }
            </ul>
        </section>
        {/* testimonial */}
        <section className='testimonials'>
                <h3 className='h3 testimonials-title'>Testimonials</h3>
                <ul className='testimonials-list has-scrollbar'>
                    {
                        testimonials.map((item, index) => (
                            <Testimonial key={index} name={item.name} avatar={item.avatar} testimonial={item.testimonial}/>
                        ))
                    }
                </ul>
        </section>
        {/* clients */}
        <section className='clients'>
            <h3 className='h3 clients-title'>Clients</h3>
            <ul className='clients-list has-scrollbar'>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-1-color.png" alt="" />
                    </a>
                </li>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-2-color.png" alt="" />
                    </a>
                </li>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-3-color.png" alt="" />
                    </a>
                </li>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-4-color.png" alt="" />
                    </a>
                </li>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-5-color.png" alt="" />
                    </a>
                </li>
                <li className='clients-item'>
                    <a href="#">
                        <img src="/images/logo-6-color.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default About
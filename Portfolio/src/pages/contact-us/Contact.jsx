import React, { useRef } from 'react'
import Form from './Form'

const Contact = () => {

    const { forms, messg } = useRef()

    return (
        <section className='contact'>
            <header>
                <h2 className="h2 article-title">Contact </h2>
            </header>
            <section className='mapbox'>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20247.619310602546!2d81.16461494125171!3d27.033623020028763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720072859177!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>
            <section className='contact-form'>
                <h3 className='h3 form-title'> Contact Form</h3>

                <Form />

            </section>
        </section>
    )
}

export default Contact
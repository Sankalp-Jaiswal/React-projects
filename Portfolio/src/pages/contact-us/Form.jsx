import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_aw3ptfx";
const TEMPLATE_ID = "template_f49wota";
const PUBLIC_KEY = "q7tuq-ep_lZSHYzA_";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
              }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
              });
            e.target.reset()
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='input-wrapper'>
                <input type="text" name='fullName' className='form-input' placeholder='Full Name' id='fullName' />

                <input type="email" name='email' className='form-input' placeholder='Email Address' id='email' />
            </div>
            <textarea name="message" className='form-input' placeholder='Your Messages' id=""></textarea>
            <button className='form-btn' type='submit'>
                <span className='btn-text'>Send Message</span>
                
            </button>
        </form>
    );
};

export default ContactUs
import React from 'react';
import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n4jig6v', 'template_u7lcqwu', form.current, 'tkPAwpmMkspllaA6l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact__option'>
    <MdOutlineMailOutline className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>mvikas1603@gmail.com</h5>
    <a href='mailto:mvikas1603@gmail.com' target='_blank'>Send a Message</a>
    </article>

    <article className='contact__option'>
    <BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <a href='https://wa.me/917036906926' target='_blank'>Send a Message</a>
    </article>

    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required/>  
    <input type='email' name='email' placeholder='Your Email' required/>
    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
  </section>
  )
}

export default Contact

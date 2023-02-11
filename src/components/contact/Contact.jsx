import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vo8jcqn', 'template_m1xiisa', form.current, '-PcftfJEbL82VCPgg')

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {/* <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>joshigautam773@gmail.com</h5>
            <a href="mailto:joshigautam773@gmail.com" target="_blank">Send a message</a>
          </article> */}
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Gautam joshi</h5>
            <a href="https://www.linkedin.com/in/gautam-joshi-78023a1b4/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7973502083</h5>
            <a href="https://api.whatsapp.com/send?phone=7973502083" target="_blank">Send a message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea type="text" name="message" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
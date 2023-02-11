import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Gautam Joshi</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
      <a href='https://facebook.com'><FaFacebook/></a>
      <a href='https://www.instagram.com/gautam.05.11/'><FiInstagram/></a>
      <a href='https://www.linkedin.com/in/gautam-joshi-78023a1b4/'><IoLogoLinkedin/></a>
         
      </div>
      <div className='footer__copyright'>
        <small>&copy; Gautam Joshi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
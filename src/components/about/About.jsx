import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import MeAbout from '../../assets/meabout.jpeg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MeAbout} ></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>less than one year </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Company</h5>
              <small>6 months of internship in KPMG + 4 Months as full time </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          {/* <p>
          I am a MERN STACK developer, I have done many internships in different companies like KPMG. I have 7-8 months of experience in KPMG. 
          I was working as a cybersecurity developer in KPMG.
          </p> */}
          <br></br>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
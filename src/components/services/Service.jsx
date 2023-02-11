import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='servicess'>
      <h5>What I Completed</h5>
      <h2>Certifications</h2>
      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Digital Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
             
              <p>I have good knowledge of digital marketing like creating a brand, promoting a brand etc.</p>
            </li>
            
           
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend/Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>Frontend technologies like html,css,javascript,react js,redux,UI/UX.
               <br></br>
               <br></br>
              Backend technologies like node js,python,express js.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Database</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>I have inetrmediate level of knowledge of databases like mongoDB,mysql.</p>
            </li>
          

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
import React from 'react'
import Cv from '../../assets/Gautam Joshi.pdf'
import './header.css'
const CV = () => {
  return (
    <div className='cv'>
        <a href={Cv} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CV
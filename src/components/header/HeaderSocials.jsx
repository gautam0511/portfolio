import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' ><BsLinkedin/></a>
        <a href='https://github.com' ><FaGithub/></a>
        <a href='https://dribbble.com' ><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials
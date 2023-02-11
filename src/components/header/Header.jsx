import React from 'react'
import CV from './CV'
import './header.css'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Gautam Joshi</h1>
        <h5 className='text-light'>Fullstack Developer </h5>
        <CV/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Me} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-2.png'
import HeaderSocials from './HeaderSocials'
import {BsMouse} from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      <motion.div className="container header__container" initial={{ x: '-100vh'}} animate={{ x: 0}}>
        <h5>Hello I'm</h5>
        <h1>Sohan Senapati</h1>
        <h5 className='text-light'>Fullstack Devloper</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="myPhoto" />
        </div>
        <a href="#about" className='scroll__down'><BsMouse className='mouse'/>Scroll Down</a>
      </motion.div>
    </header>
  )
}

export default Header
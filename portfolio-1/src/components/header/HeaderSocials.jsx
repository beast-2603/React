import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sohan-senapati-523024203" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/beast-2603" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/u.sir.nem/?utm_medium=copy_link" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
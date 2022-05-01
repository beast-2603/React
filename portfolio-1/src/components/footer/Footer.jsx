import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SOHAN</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/sohan.senapati.7186" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/u.sir.nem/?utm_medium=copy_link" target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com/sohan68982498?t=cl2qnNLebIrYAAMBHOnKVg&s=09" target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
        <a href="https://github.com/beast-2603" target='_blank' rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Sohan. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer
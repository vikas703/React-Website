import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>VIKAS</a>

    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Skills</a></li>
    <li><a href='#portfolio'>Projects</a></li>
    <li><a href='#testimonials'>Certificates</a></li> 
    </ul>
    <div className='footer__socials'>
    <a href=' https://www.linkedin.com/in/vikasmulastham123/' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/vikas703?tab=repositories' target="_blank"><FaGithub/></a>    
    </div>

    <div className='footer__copyright'>
    <small>&copy; Vikas . All Rights reserved</small>
    </div>

    </footer>
  )
}

export default Footer

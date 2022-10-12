import React from 'react';
import './Nav.css';
import { AiOutlineHome , AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineProject } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { useState } from 'react';




const Nav = () => {
  const [activeNav , setActiveNav] = useState('#');
  return (
    <nav>
    <a href='#' onClick={() => setActiveNav('#')} 
    className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

    <a href='#about' onClick={() => setActiveNav('#about')} 
    className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

    <a href='#experience' onClick={() => setActiveNav('#experience')} 
    className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>

    <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} 
    className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>

    <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} 
    className={activeNav === '#testimonials' ? 'active' : ''}><AiOutlineSafetyCertificate/></a>

    <a href='#contact' onClick={() => setActiveNav('#contact')} 
    className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav

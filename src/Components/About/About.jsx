import React from 'react';
import './About.css';
import ME from '../../assets/vikas.jpeg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {AiFillProject} from 'react-icons/ai';


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
    <div className='about__me'>
    <div className='about__me-image'>
    <img src={ME} alt='My-Image'/>
    </div>
    </div>
    
    <div className='about__content'>
    <div className='about__cards'>

    <article className='about__card'>
    <FaAward className='about__icon' />
    <h5>Experience</h5>
    <small>InternShip</small>
    </article>

    <article className='about__card'>
    <AiFillProject className='about__icon'/>
    <h5>Projects</h5>
    <small>3</small>
    </article>

    </div>
    <p>
        Successfully completed Internship at Cognizant on practical
        training of Java Full Stack. Assisted and trained by the senior
        trainers in the company, I got a good idea on software
        development and also real time experience, which really
        helped me gain more knowledge on software development as
        the days are passing. This intensive 6 months Internship
        program made me more confident on not just simply
        developing a software but developing it efficiently.

    </p>

    </div>
    </div>
    </section>
   
  )
}

export default About;
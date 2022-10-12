import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills I Have</h5>
    <h2>My Skills</h2>

    <div className='container experience__container'>
    <div className='experience__frontend'>
    <h3>Frontend Development</h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Advanced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Advanced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>JavaScript</h4>
    <small className='text-light'>Advanced</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>React</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
    
    </div>
    </div>

    <div className='experience__backend'>
    
    <h3>Other programming Languages</h3>
    <div className='experience__content'>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>Java</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>Python</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>C/C++</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>SQL</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
    
    </div>
    
    
    </div>
    </div>
    </section>
  )
}

export default Experience

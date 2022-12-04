import React from 'react'
import './Portfolio.css';
import Fetch from '../../assets/Fetch.jpeg';
import Store from '../../assets/Store.png';
import Admin from '../../assets/admin.JPG';
import Vpn from '../../assets/VPN.JPG';





const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className='container portfolio__container'>

    <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={Vpn} alt='img-here'></img>
      </div>
      <h3>React-Website</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/vikas703/React_Front' className='btn' target='_blank'>Github</a>
      <a href='https://vikas703.github.io/React_Front/' className='btn btn-primary' target='_blank'>Live-Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={Admin} alt='img-here'></img>
      </div>
      <h3>Admin-Dashboard</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/vikas703/Admin-Dash' className='btn' target='_blank'>Github</a>
      <a href='https://vikas703.github.io/Admin-Dash/' className='btn btn-primary' target='_blank'>Live-Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={Fetch} alt='img-here'></img>
      </div>
      <h3>Fetching-Data-From-API-React</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/vikas703/Fetch' className='btn' target='_blank'>Github</a>
      <a href='http://vikas703.github.io/Fetch' className='btn btn-primary' target='_blank'>Live-Demo</a>
      </div>
      </article>

      <article className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={Store} alt='img-here'></img>
      </div>
      <h3>Stores-Recipes-React</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/vikas703/Stores-Recipes' className='btn' target='_blank'>Github</a>
      <a href='http://vikas703.github.io/Stores-Recipes' className='btn btn-primary'  target='_blank'>Live-Demo</a>
      </div>
      </article>

      
      
    </div>
    
    
    </section>
  )
}

export default Portfolio

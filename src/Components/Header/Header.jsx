import React from 'react';
import './Header.css';
import CTA from './CTA';
//import ME from '../../assets/vikas.jpeg';
//import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
    <div className='container header__container'>
    <h5>Hello I'm</h5>
    <h1>Vikas Mulastham</h1>
   
    <div class="wrapper">
    <div class="typing-demo">
    A Software Developer Fanatic
    </div>
    </div>

    <CTA />
    

    <div  className='head_text'>
      <p>
      The moment I saw my computer I was so excited to use it. 
      When I used it for the first time I was completely astounded 
      by its speed and the way it works. This is the instance that 
      provoked me to learn more about computers. During my higher 
      secondary education, I started to learn about computers. As 
      I came to know more and more about computers the next thing 
      that captivated me was software. Softwares are like the results 
      of computers through which we can use a computer proficiently. 
      When I came to know more about software and the way they work 
      I became familiar with programming. After learning to program, 
      I built a couple of websites like the one I have to describe myself 
      and some projects using <i className='soft'>HTML, CSS, JavaScript, React.</i> Gradually Softwares 
      and websites made me realize how many people use these services and with 
      billions of devices now online, new threats pop-up every second.
      <br/> <br/>
      Interestingly 90% of the data in the world was generated in the past 
      three years which also means that there is a 
      huge need for software development. This blew my mind and I know that 
      there are many services where development is a must and this is where 
      my role comes into play. I have developed a passion to become a <i className='soft'>Software Developer</i>
      </p>
    </div> 

    </div>
    </header>
  )
}

export default Header

/*  <div class="typewriter">
    <h5 className='text-light'>A Software Developer Fanatic</h5>
    </div> 
        
    <a href='#contact' className='scroll__down' >Scroll Down </a>

    */
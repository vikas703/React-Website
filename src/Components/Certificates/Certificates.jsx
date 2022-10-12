import React from 'react'
import './Certificates.css';
import Java from '../../assets/Java2.png';
import SQL from '../../assets/SQL.png';
import Frontend from '../../assets/Frontend.jpg';

import SQLCR from '../../assets/sql-certificate.pdf';
import JAVACR from '../../assets/java-Certificate.pdf';
import FrontCR from '../../assets/Frontend.pdf';



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import { Navigation } from "swiper";

const  data = [
  {
    avatar: Frontend,
    Name: 'HTML, CSS, JavaScript, React',
    review:'React-JS Complete Guide For Frontend Web Development.',
    demo: FrontCR
  },
  {
    avatar: Java,
    Name: 'Java',
    review:'Project Development Using Java For Beginners.',
    demo: JAVACR
  },
  {
    avatar: SQL,
    Name: 'SQL',
    review:'Has successfully completed the course by demonstrating theoretical and practical understanding of SQL',
    demo: SQLCR
  }
]


const Testimonials = () => {
  return (
   <section id='testimonials'>
   
   <h2>Certificates</h2>

    <Swiper navigation={true} modules={[Navigation]} className='container testimonials__container'>

    {
      data.map(({avatar,Name,review,demo}, index) => {
        return (
          <SwiperSlide  key={index} className='testimonial'>
        <div className='certificate__avatar'>
        <img src={avatar} alt='Java'/>
        </div>
        <h5 className='certificate__name'>{Name}</h5>
        <small className='certificate__review'>{review}</small>
        <br/>
        <a href={demo} className='btn btn-primary' target='_blank'>Certificate</a>
        </SwiperSlide>
        )
      })

    }
    
    </Swiper>
  </section>
  )
}

export default Testimonials;

import React from 'react'
import './tesinominal.css'
import avtar1 from '../../assets/avatar1.jpg'
import avtar2 from '../../assets/avatar2.jpg'
import avtar3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Tesinominal() {

  const data=[{
    avatar:avtar1,
    name:'kaustubh nangarepatil',
    review:'good projects'
  },
{
  avatar:avtar2,
  name:'satyajit',
  review:'Nice Work'
},
{
  avatar:avtar3,
  name:'nitin',
  review:'great work'
}]
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimoninals</h2>
      <Swiper className='conatiner testimonials__container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt='image1'/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               { review}
              </small>
          </SwiperSlide>
          )
         
        })
      }
     

      </Swiper>

      </section>
  )
}

export default Tesinominal
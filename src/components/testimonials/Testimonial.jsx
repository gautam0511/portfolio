import React from 'react'
import './testimonial.css'
import Me from '../../assets/meabout.png'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Me,
    name: 'Ernest Achiever',
    description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },
  {
    avatar: Me,
    name: 'Ernest Achiever',
    description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },
  {
    avatar: Me,
    name: 'Ernest Achiever',
    description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },

  {
    avatar: Me,
    name: 'Ernest Achiever',
    description: 'Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  }

]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, description }) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}></img>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {description}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial
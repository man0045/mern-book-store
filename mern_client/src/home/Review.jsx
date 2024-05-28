import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {FaStar} from "react-icons/fa6" 
import proPic from '../assets/profile.jpg'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
     <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
     <div>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-6 px-3 md:m-3 rounded-lg border'>
         <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2'>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
          </div>
          <div className='mt-7'>
           <p className='mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cumque delectus dolores cupiditate odio! Fugit explicabo doloremque quaerat a harum reiciendis sint odit exercitationem nihil illo eaque assumenda magni nisi ut.
            <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO, ABC Company</p>
           </p>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-6 px-3 md:m-3 rounded-lg border'>
         <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2'>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
          </div>
          <div className='mt-7'>
           <p className='mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cumque delectus dolores cupiditate odio! Fugit explicabo doloremque quaerat a harum reiciendis sint odit exercitationem nihil illo eaque assumenda magni nisi ut.
            <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO, ABC Company</p>
           </p>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-6 px-3 md:m-3 rounded-lg border '>
         <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2'>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
          </div>
          <div className='mt-7'>
           <p className='mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cumque delectus dolores cupiditate odio! Fugit explicabo doloremque quaerat a harum reiciendis sint odit exercitationem nihil illo eaque assumenda magni nisi ut.
            <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO, ABC Company</p>
           </p>
          </div>
         </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-6 px-3 md:m-3 rounded-lg border'>
         <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2'>
           <FaStar/>
           <FaStar/>
           <FaStar/>
           <FaStar/>
          </div>
          <div className='mt-7'>
           <p className='mb-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cumque delectus dolores cupiditate odio! Fugit explicabo doloremque quaerat a harum reiciendis sint odit exercitationem nihil illo eaque assumenda magni nisi ut.
            <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO, ABC Company</p>
           </p>
          </div>
         </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </div>
  )
}

export default Review

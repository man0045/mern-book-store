import React from 'react'
import { Link } from 'react-router-dom'
import FavBookImg from "../assets/favoritebook.jpg" 
const FavBooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
      <div className='md: w-1/2'>
       <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
       <h2 className='text-4xl font-bold my-1 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
       <p className='mb-10 md:w-5/6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis dolore perferendis vero? Sit beatae ab, doloribus molestiae dolore architecto aspernatur nihil mollitia explicabo labore ex! Temporibus cum, optio sit expedita laborum suscipit perferendis!
       </p>
        <div className='flex flex-col sm:flex-row justify-between gap-3 md:w-3/4 my-14'>
       <div>
         <h3 className='text-2xl font-bold'>800+</h3>
         <p className='text-base'> Book Listening</p>
         </div>
        <div>
         <h3 className='text-2xl font-bold'>550+</h3>
         <p className='text-base'> Registerd Users</p>
         </div>
        <div>
         <h3 className='text-2xl font-bold'>1200+</h3>
         <p className='text-base'> PDF Downloads</p>
         </div>
       </div>
         <Link to="/shop" className='mt-8 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
           Explore More
          </button>
          </Link>
      </div>
    </div>
  )
}

export default FavBooks

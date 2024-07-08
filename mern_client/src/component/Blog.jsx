import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contect/AuthProvider';
import UpdateBlog from './UpdateBlog';
import { Link } from 'react-router-dom';



const Blog = () => {
  const [name, setAllName] = useState([]);
  useEffect(() => {
    fetch("https://mern-book-store-1.onrender.com/all-blogs").then(res => res.json()).then(data => setAllName(data));
  })
  const handleDelete = (id) => {
    fetch(`https://mern-book-store-1.onrender.com/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Deleted Successfully!");
      })
  };


  return (
    // <div className='mt-28 px-4 lg:px24'>
    //   <h2 className='shadow-md text-4xl font-bold text-center'>Read and create your <span className='text-sky-700'>own blogs of our book store</span> </h2>

    // {
    //   name.map((blog, index) => <Card className = "max-w-sm mt-3" key = {blog._id}>


    //   <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{blog.Name}</h5>
    //   <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
    //     {blog.Blogs}
    //   </p>
    //   <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
    //     <a
    //       href="#"
    //       className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
    //     >
    //       <div className="text-left">
    //         <div className="mb-1 text-xs"></div>
    //         <div className="-mt-1 font-sans text-sm font-semibold">Edit your Blogs</div>
    //       </div>
    //     </a>
    //     <a
    //       href="#"
    //       className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
    //     >
    //       <div className="text-left">
    //         <div className="mb-1 text-xs"></div>
    //         <div className="-mt-1 font-sans text-sm font-semibold"> Delete Your Blogs</div>
    //       </div>
    //     </a>
    //   </div>
    // </Card>)
    // }
    // </div>
    <div className='mt-28 px-4 flex flex-col items-center'>
      <h2 className='shadow-md text-4xl font-bold text-center'>
        Read and create your <span className='text-sky-700'>own blogs of our book store</span>
      </h2>

      <div className='mt-8 px-4 lg:px-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>


        {name.map((blog) => 
          <div key={blog._id} className=' mt-3 bg-white p-6 rounded-md shadow-md '>
            <h5 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white'>{blog.Name}</h5>
            <p className=' text-base text-gray-500 dark:text-gray-400 sm:text-lg'>{blog.Blogs}</p>
            <h3 className=' text-base text-gray-800 dark:text-gray-900 sm:text-lg text-bold' style={{fontWeight: 'bold'}}>
              <h5 className='text-rose-600' style={{fontSize: 14}}> AuthorName:</h5>
             {blog.authorName}</h3>
            <h3 className='mb-5 text-bold text-gray-800 dark:text-gray-900 sm:text-lg text-bold' style={{fontWeight: 'bold'}}>
              <h5 className='text-green-800' style={{fontSize: 13,}}>bookTitle:</h5>
              {blog.bookTitle}</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='flex items-center justify-center w-1/2 px-4 py-2.5 rounded-lg bg-red-800 text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <span className='text-left'>
                  {/* <span className='font-sans text-sm font-semibold'>Edit</span> */}
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/EditBlogs/${blog._id}`}>

                    Edit

                  </Link>
                </span>
              </a>
              <a
                href='#'
                className='flex items-center justify-center w-1/2 px-4 py-2.5 rounded-lg bg-sky-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
              >
                <span className='text-left'>
                  <span onClick={() => handleDelete(blog._id)} className='font-sans text-sm font-semibold'>Delete</span>
                </span>
              </a>
            </div>

          </div>
        
        )}
      </div>
      <UpdateBlog />

    </div>

  )
}

export default Blog

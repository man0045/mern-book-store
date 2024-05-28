import React,{useContext} from 'react'

import { Card } from 'flowbite-react';

import { Label, Textarea, Button } from 'flowbite-react';

const UpdateBlog = () => {
 

 const handleBookSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const Name = form.Name.value;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const Blogs = form.Blogs.value;
  const bookObj = { Name, bookTitle, authorName, Blogs };
  console.log(bookObj)


  fetch("http://localhost:5000/blog", {
   method: "POST",
   headers: {
    "Content-type": "application/json",
   },
   body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(data => {
   alert("Blog uploaded successfully!!!")
   form.reset();
  })
 }

 return (
  <div className='mt-8 mb-8 w-full max-w-lg'>
   <h3 className='text-3xl font-bold text-center mt-10'>Post your Blogs</h3>
   <form onSubmit={handleBookSubmit} className="shadow-md w-full max-w-lg mt-6">
    <div className="flex flex-wrap -mx-3 mb-2">
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Label htmlFor="Name" value="Your Name" />
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Name" type="text" placeholder="Enter Your Name Here" />
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Label htmlFor="bookTitle" value="Book Title" />
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="bookTitle" type="text" placeholder="Enter the Book Title" />
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Label htmlFor="authorName" value="Author Name" />
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="authorName" type="text" placeholder="Enter the Author Name" />
     </div>
    </div>
    {/* <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="Blogs" value="Blogs" />
              <Textarea id="comment" placeholder="Leave Your blog..." required rows={6} cols={19} />
            </div> */}
    <div>
     <div className="mb-2 block">
      <Label htmlFor="Blogs" value="book Description" />
     </div>
     <Textarea id="Blogs" placeholder="Leave Blogs from Here..." required className='w-full' rows={5} />
    </div>

    <Button type="Submit" className='mt-3 mx-auto block px-16 py-1' gradientMonochrome="success">Submit</Button>

   </form>
  </div>
 )
}

export default UpdateBlog

import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const EditBooks = () => {
 const {id} = useParams();
 const {bookTitle, authorName, imageUrl,category, bookDescription,bookPdfUrl}=useLoaderData();
  
 const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "History",
  "Programming",
  "Mistory",
  "Science Fiction",
  "Fantasy",
  "Horror",
  "BiblioGraphy",
  "AutoBiography",
  "Self-help",
  "Memoir",
  "BuissinessBook",
  "Children Books",
  "Travel",
  "Religion",
  "Art and Design"
 ]
 const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
 const handleChangeSelectedValue = (event) => {
  // console.log(event.target.value);
  setSelectedBookCategory(event.target.value);
 }
 const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageUrl = form.imageUrl.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPdfUrl = form.bookPdfUrl.value;
  const UpdatebookObj= {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl};
  fetch(`http://localhost:5000/book/${id}`,{
   method:"PATCH",
   headers:{
    "Content-Type":"application/json"
   },
   body: JSON.stringify(UpdatebookObj)
  }).then(res => res.json()).then(data=>{
   alert("Book updated successfully!!!")
  
  })

 }
 return (
  <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Edit your Books</h2>
   <form onSubmit={handleUpdate} className="flex lg:w-[880px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="bookTitle" value="Book Title" />
      </div>
      <TextInput id="bookTitle" name="bookTitle" placeholder="Book Name" required type="text" defaultValue={bookTitle}/>
     </div>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="authorName" value="Author Name" />
      </div>
      <TextInput id="authorName" name="authorName" placeholder="Author Name" required type="text" defaultValue={authorName} />
     </div>

    </div>
    <div className='flex gap-8'>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="imageUrl" value="Book image Url" />
      </div>
      <TextInput id="imageUrl" name="imageUrl" placeholder="Book Imgage URL" required type="text" defaultValue={imageUrl}/>
     </div>
     <div className='lg:w-1/2'>
      <div className='mb-2 block'>
       <Label htmlFor="inputState" value="Book Category" />

      </div>
      <select id='inputState' name='categoryName' className='w-full rounded' value={selectBookCategory} onChange={handleChangeSelectedValue}>
       {
        bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
       }
      </select>
     </div>
     

    </div>
    <div>
      <div className="mb-2 block">
       <Label htmlFor="bookDescription" value="book Description" />
      </div>
      <Textarea id="bookDescription" placeholder="Leave a Description Here..." required className = 'w-full' rows={5} defaultValue={bookDescription}/>
     </div>
     {/* {Book pdf Url} */}
     <div>
      <div className='mb-2 block'>
       <Label htmlFor="bookPdfUrl" value="BOOK PDF URL"/>

      </div>
      <TextInput
      id="bookPdfUrl"
      name='bookPdfUrl'
      placeholder="book pdf url"
      required
      type="text"
      defaultValue={bookPdfUrl}
      />

     </div>
     <Button type="Submit" className='mt-5'>
      Update Book
     </Button>
   </form>
  </div>
 )
}

export default EditBooks

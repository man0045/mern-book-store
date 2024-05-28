import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const Uploadbooks = () => {
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
 const handleBookSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageUrl = form.imageUrl.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPdfUrl = form.bookPdfUrl.value;
  const bookObj= {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl};
  fetch("http://localhost:5000/upload-book",{
   method: "POST",
   headers: {
    "Content-type": "application/json",
   },
   body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(data=>{
   alert("Book uploaded successfully!!!")
   form.reset();
  })

 }
 return (
  <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>
   <form onSubmit={handleBookSubmit} className="flex lg:w-[880px] flex-col flex-wrap gap-4">
    <div className='flex gap-8'>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="bookTitle" value="Book Title" />
      </div>
      <TextInput id="bookTitle" name="bookTitle" placeholder="Book Name" required type="text" />
     </div>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="authorName" value="Author Name" />
      </div>
      <TextInput id="authorName" name="authorName" placeholder="Author Name" required type="text" />
     </div>

    </div>
    <div className='flex gap-8'>
     <div className='lg:w-1/2'>
      <div className="mb-2 block">
       <Label htmlFor="imageUrl" value="Book image Url" />
      </div>
      <TextInput id="imageUrl" name="imageUrl" placeholder="Book Imgage URL" required type="text" />
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
      <Textarea id="bookDescription" placeholder="Leave a Description Here..." required className = 'w-full' rows={5} />
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
      />

     </div>
     <Button type="Submit" className='mt-5'>
      Upload Book
     </Button>
   </form>
  </div>
 )
}

export default Uploadbooks

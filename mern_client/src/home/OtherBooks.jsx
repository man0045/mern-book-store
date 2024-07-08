import React from 'react'
import { useState, useEffect } from 'react';
import BookCards from '../component/BookCards';
const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
   fetch("https://mern-book-store-1.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(3, 10)))
  }, [])
   return (
     <div>
       <BookCards books={books} headline="Other Books"/>
     </div>
   )
 }

export default OtherBooks

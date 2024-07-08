import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const BestSellerBooks = () => {
 const [books, setBooks] = useState([]);
 useEffect(() => {
  fetch("https://mern-book-store-1.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
 }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Sellers Book"/>
    </div>
  )
}

export default BestSellerBooks

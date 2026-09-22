import React from 'react';
import BookCard from '../shared/bookcard';
import { BookType } from '@/book';
const getbooks = async()=>{
     try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
  }catch(error){
console.error("error fetch book data", error);
return []
  }
}

const BooksPage = async() => {
    const books = await getbooks();

    return (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
    {
        books.map((book:BookType) => <BookCard book={book} key={book.bookId}></BookCard> )
    }
</div>
    );
};

export default BooksPage;            
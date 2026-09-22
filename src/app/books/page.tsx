import React from "react";
import { BookType } from "@/book";
import BookCard from "@/components/shared/bookcard";
const getbooks = async () => {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
  }catch(error){
console.error("error fetch book data", error);
return []
  }
};

const BooksAllPage = async () => {
  const books = await getbooks();

  return (
    <div className="mt-20">
        <p className="text-1xl text-center text-green-400">our collection</p>
        <h2 className="text-5xl font-bold  text-center">Explore All Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {books.map((book: BookType) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksAllPage;

import { BookType } from "@/book";
import React from "react";
import Image from "next/image";
import Readbook from "@/app/readbook/page";
import Wishbook from "@/app/readbook/wishbook";
import { error } from "console";
interface paramstype {
  params: Promise<{
    id: string;
  }>;
}
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

const BookDetailPage = async ({ params }: paramstype) => {
  const { id } = await params;
  const bookdata = await getbooks();
  const book = bookdata.find(
    (book: BookType) => book.bookId === Number(id),
  ) as BookType;
return (
  <div className="container mx-auto">
    <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

      {/* Book Image */}
      <figure className="lg:w-2/5 bg-base-200 p-6">
        <Image
          width={800}
          height={600}
          src={book.image}
          alt={book.bookName}
          className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-3/5 p-6 lg:p-10">

        {/* Category */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="badge badge-primary badge-outline">
            {book.category}
          </span>

          <span className="text-sm text-base-content/60">
            #{book.bookId}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-lg text-base-content/60 mt-1">
          by <span className="font-semibold text-base-content">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-bold">{book.rating}</span>
          </div>

          <span className="text-base-content/40">•</span>

          <span className="text-sm text-base-content/60">
            {book.totalPages} pages
          </span>
        </div>

        {/* Review */}
        <p className="text-base-content/70 leading-7 mt-5">
          {book.review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-ghost px-4 py-3"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs text-base-content/50 uppercase tracking-wide">
              Publisher
            </p>
            <p className="font-semibold mt-1">
              {book.publisher}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs text-base-content/50 uppercase tracking-wide">
              Published
            </p>
            <p className="font-semibold mt-1">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs text-base-content/50 uppercase tracking-wide">
              Pages
            </p>
            <p className="font-semibold mt-1">
              {book.totalPages}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-xs text-base-content/50 uppercase tracking-wide">
              Rating
            </p>
            <p className="font-semibold mt-1">
              {book.rating} / 5
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="card-actions mt-7">

<Readbook book={book}></Readbook>

<Wishbook book={book}></Wishbook>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailPage;

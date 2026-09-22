import { BookType } from "@/book";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const WishRead = ({ book }: { book: BookType }) => {
  return (
    <div>
      <div
        key={book.bookId}
        className="flex flex-col md:flex-row gap-6 p-5 rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-lg transition"
      >
        {/* Image */}
        <div className="w-full md:w-40 h-56 md:h-52 relative shrink-0">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">{book.bookName}</h2>

              <p className="text-gray-500 mt-1">by {book.author}</p>
            </div>

            <div className="badge badge-success gap-1">★ {book.rating}</div>
          </div>

          <p className="text-sm text-gray-600 mt-4 line-clamp-3">
            {book.review}
          </p>

          {/* Info */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge badge-outline">{book.category}</span>

            <span className="badge badge-outline">{book.totalPages} Pages</span>

            <span className="badge badge-outline">{book.yearOfPublishing}</span>
          </div>

          {/* Tags */}
          {/* <div className="flex flex-wrap gap-2 mt-4">
            {book.tags.map((tag, index) => (
              <span key={index} className="badge badge-primary badge-outline">
                #{tag}
              </span>
            ))}
          </div> */}

          <p className="text-sm text-gray-500 mt-4">
            Publisher:{" "}
            <span className="font-semibold text-base-content">
              {book.publisher}
            </span>
          </p>
          <div className="mt-5">
            <Link
              href={`/books/${book.bookId}`}
              className="btn btn-primary btn-sm w-50 rounded-full px-6"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishRead;

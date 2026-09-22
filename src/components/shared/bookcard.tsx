import { BookType } from "@/book";
import Image from 'next/image'
import Link from "next/link";

interface bookprops {
  book: BookType;
}

const BookCard = ({ book }: bookprops) => {

  return (
    <div className="mt-20">
      <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
        {/* Book Cover */}
        <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-200 p-5">
          {/* Badge */}
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
              {book.tags[0]}
            </span>
          </div>

          {/* Favorite */}
          <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-sm backdrop-blur-md transition hover:bg-slate-900 hover:text-white">
            ♡
          </button>

          {/* Image */}
          <div className="flex h-72 items-center justify-center">
            <Image   
              src={book.image}
              alt={book.bookName}
              width={800}
              height={600}
              className="h-full w-auto rounded-lg object-cover
              shadow-[0_15px_30px_rgba(15,23,42,0.25)] transition duration-500
              group-hover:scale-105 group-hover:-rotate-1"
            />
            


          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Book Name */}
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm font-medium text-slate-500">
            {book.author}
          </p>

          {/* Review */}
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
            {book.review}
          </p>

          {/* Rating + Pages */}
          <div className="mt-5 flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5">
              <span className="text-amber-400">★</span>

              <span className="text-sm font-bold text-slate-700">
                {book.rating}
              </span>
            </div>

            {/* Pages */}
            <span className="text-sm font-medium text-slate-400">
              {book.totalPages} pages
            </span>
          </div>

          {/* Category + Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {/* Category */}
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              {book.category}
            </span>

            {/* Tags */}
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-600/20">
            <span>📖</span>
            Read Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BookCard;

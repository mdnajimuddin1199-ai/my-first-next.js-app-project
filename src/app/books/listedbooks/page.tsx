"use client";

import { bookContext } from "@/context/bookContext";
import { BookType } from "@/book";
import React, { useContext, useState } from "react";
import Image from "next/image";
import WishRead from "@/components/shared/read&wish";
import { Eagle_Lake } from "next/font/google";

const Listedbooks = () => {


  const { read, wish } = useContext(bookContext);
  const [shord,setshort] = useState<"Rating"| "Pages" | "Publish">("Rating")
    const shortbooks = (book:BookType[])=>{
      const shortedbook = [...book];
      if(shord === "Rating"){
        shortedbook.sort((a,b)=> b.rating - a.rating)

      }else if(shord === "Pages"){
        shortedbook.sort((a,b)=> b.totalPages - a.totalPages)
      }else if(shord==="Publish"){
        shortedbook.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
      }
      return shortedbook;

  }
  const shortreadbooks = shortbooks(read);
  const shortwish = shortbooks(wish)
console.log("shortread", shortreadbooks);
console.log("shortwish", shortwish);
  return (
    <div className="mt-10">  
    <h3 className="text-5xl text-center font-bold">Listed Books</h3>
      <div className="flex justify-center items-center mt-10">
        {" "}
        <select value={shord} onChange={(e)=> setshort(e.target.value as "Rating"| "Pages"|"Publish")} defaultValue="Pick a Runtime" className="select select-success">
          <option disabled={true}>Short by</option>
          <option value={"Rating"}>Rating</option>
          <option value={"Pages"}>Number of pages</option>
          <option value={"Publish"}>Publisher year</option>
        </select>
      </div>
    

      <div className="mt-10 container mx-auto px-4">
        <div className="tabs   tabs-lift">
          {/* ================= READ LIST ================= */}
          <input
            type="radio"
            name="my_tabs_5"
            className="tab"
            aria-label="Read List"
            defaultChecked
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="space-y-5">
              {shortreadbooks.map((book: BookType) => (
                <WishRead book={book} key={book.bookId}></WishRead>
              ))}

              {read.length === 0 && (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-bold">No books in Read List</h2>
                  <p className="text-gray-500 mt-2">
                    Start reading some books and they will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= WISH LIST ================= */}
          <input
            type="radio"
            name="my_tabs_5"
            className="tab"
            aria-label="Wish List"
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="space-y-5">
              {shortwish.map((book: BookType) => (
                <WishRead book={book} key={book.bookId}></WishRead>
              ))}

              {wish.length === 0 && (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-bold">No books in Wish List</h2>
                  <p className="text-gray-500 mt-2">
                    Add some books to your wishlist and they will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listedbooks;

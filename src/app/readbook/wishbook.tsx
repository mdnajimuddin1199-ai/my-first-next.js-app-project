"use client";
import { BookType } from "@/book";
import { bookContext } from "@/context/bookContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Wishbook = ({ book }: { book: BookType }) => {
  const { wish, setwish } = useContext(bookContext);
  const hendelreadbook = () => {
    setwish([...wish, book]);
     toast.success(`you have added ${book.bookName} to your Wish List`)
  };
  return (
    <div>
          <button onClick={hendelreadbook} className="btn btn-outline flex-1">
             Wishlist
          </button>
    </div>
  );
};

export default Wishbook;
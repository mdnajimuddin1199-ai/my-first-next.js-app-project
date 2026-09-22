"use client";
import { BookType } from "@/book";
import { bookContext } from "@/context/bookContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Readbook = ({ book }: { book: BookType }) => {
  const { read, setread } = useContext(bookContext);
  const hendelreadbook = () => {
    setread([...read, book]);
    toast.success(`you have added ${book.bookName} to your Read List`)
  };
  return (
    <div>
      <button onClick={hendelreadbook} className="btn btn-primary flex-1">
        Read
      </button>
    </div>
  );
};

export default Readbook;

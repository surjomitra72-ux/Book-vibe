"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        className="btn rounded-lg border-0 bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-green-700"
        onClick={handleReadBook}
      >
        📖 Read Now
      </button>
    </div>
  );
};

export default ReadButton;

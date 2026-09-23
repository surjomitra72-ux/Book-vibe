"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("WishListButton must be used inside BooksProvider");
  }

  const { wishlist, setWishlist } = context;

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);

    toast.success(`"${book.bookName}" added to your wishlist!`);
  };

  return (
    <div className="card-actions mt-8 justify-start">
      <button
        onClick={handleAddToWishlist}
        className="btn rounded-lg border border-green-500 bg-white px-5 py-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50"
      >
        ❤️ Wishlist
      </button>
    </div>
  );
};

export default WishListButton; 
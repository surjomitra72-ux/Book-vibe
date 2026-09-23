"use client";

import React, { createContext, useState } from "react";
import { IBook } from "@/types/books.type";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;

  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext | undefined>(
  undefined
);

const BooksProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData: IBooksContext = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
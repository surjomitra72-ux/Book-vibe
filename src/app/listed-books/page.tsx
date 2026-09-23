"use client";

import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;

  const [sortBy, setSortBy] = useState("rating");

  // Sort Books
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-5">

      {/* Page Title */}
      <h2 className="my-4 rounded-3xl bg-amber-100 py-8 text-center text-3xl font-bold">
        Listed Books
      </h2>

      {/* Sort Section */}
      <div className="mb-2 flex justify-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-success h-8 w-28 min-h-0 px-2 text-xs"
        >
          <option value="rating">Sort by</option>
          <option value="pages">Pages</option>
          <option value="year">Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">

        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="space-y-5">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book) => (
                <ListedBookCard
                  key={book.bookId}
                  book={book}
                />
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No read books found
              </p>
            )}
          </div>
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="space-y-5">
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book) => (
                <ListedBookCard
                  key={book.bookId}
                  book={book}
                />
              ))
            ) : (
              <p className="text-center text-lg font-semibold">
                No wishlist books found
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListedBooks;
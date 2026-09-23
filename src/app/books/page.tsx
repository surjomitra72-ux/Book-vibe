import React from "react";

import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 font-semibold uppercase tracking-widest text-green-600">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing books from different genres and find your next
          favorite read.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book: IBook) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </section>
  );
};

export default Books;
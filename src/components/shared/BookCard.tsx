import React from "react";
import Image from "next/image";
import { IBook } from "@/types/books.type";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          unoptimized
          className="h-full w-full  transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow backdrop-blur-sm">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Book Name */}
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Book Info */}
        <div className="mt-4 flex items-center justify-between border-y border-slate-100 py-3 text-sm text-slate-500">
          <span>📄 {book.totalPages} pages</span>

          <span>📅 {book.yearOfPublishing}</span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex min-h-[28px] flex-wrap gap-2">
          {book.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition duration-300 hover:bg-green-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

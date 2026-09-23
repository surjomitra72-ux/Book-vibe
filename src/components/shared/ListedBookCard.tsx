import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/books.type";

interface IListedBookCardProps {
  book: IBook;
}

const ListedBookCard = ({ book }: IListedBookCardProps) => {
  return (
    <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">

      {/* Book Image */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100 md:h-56 md:w-40">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Book Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            {book.category}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            {book.bookName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            by{" "}
            <span className="font-semibold text-slate-700">
              {book.author}
            </span>
          </p>

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">
            <span>⭐ {book.rating}</span>
            <span>📄 {book.totalPages} pages</span>
            <span>📅 {book.yearOfPublishing}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Publisher:{" "}
            <span className="font-medium text-slate-700">
              {book.publisher}
            </span>
          </p>

          <Link
            href={`/books/${book.bookId}`}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
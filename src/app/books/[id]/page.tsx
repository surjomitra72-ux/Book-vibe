import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find((book: IBook) => book.bookId === Number(id));

  if (!book) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Book not found</h2>
        <p className="mt-2 text-slate-500">
          The book you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="card lg:card-side overflow-hidden border border-slate-200 bg-base-100 shadow-xl transition duration-300 hover:shadow-2xl">
        {/* Book Image */}
        <figure className="relative bg-gradient-to-br from-green-50 via-white to-slate-100 p-6 lg:w-2/5 lg:p-10">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={book.image}
              alt={book.bookName}
              width={800}
              height={600}
              unoptimized
              className="h-full w-full  transition duration-500 group-hover:scale-105"
            />

            {/* Category */}
            <span className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
              {book.category}
            </span>

            {/* Rating */}
            <span className="absolute right-4 top-4 rounded-full bg-black/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              ⭐ {book.rating}
            </span>
          </div>
        </figure>

        {/* Book Details */}
        <div className="card-body justify-center p-6 md:p-10 lg:w-3/5">
          {/* Book Title */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
              Book Details
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              {book.bookName}
            </h2>

            <p className="mt-2 text-lg text-slate-500">
              by{" "}
              <span className="font-semibold text-slate-700">
                {book.author}
              </span>
            </p>
          </div>

          {/* Review */}
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Review
            </p>

            <p className="mt-2 leading-7 text-slate-600">{book.review}</p>
          </div>

          {/* Book Information */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Pages</p>
              <p className="mt-1 font-bold text-slate-800">{book.totalPages}</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Rating</p>
              <p className="mt-1 font-bold text-slate-800">⭐ {book.rating}</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Publisher</p>
              <p className="mt-1 truncate font-bold text-slate-800">
                {book.publisher}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Published</p>
              <p className="mt-1 font-bold text-slate-800">
                {book.yearOfPublishing}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-slate-500">Tags</p>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <ReadButton  book={book}/>
          <WishListButton book={book}/>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

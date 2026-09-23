import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu Items */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/books">Books</Link>
              </li>

              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>

              <li>
                <Link href="/read-books">Read Books</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Book Vibe logo" width={38} height={38} />

            <span className="text-xl font-bold tracking-tight text-slate-800">
              Book <span className="text-green-600">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <li>
              <Link
                href="/"
                className="rounded-lg hover:bg-green-50 hover:text-green-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/books"
                className="rounded-lg hover:bg-green-50 hover:text-green-600"
              >
                Books
              </Link>
            </li>

            <li>
              <Link
                href="/listed-books"
                className="rounded-lg hover:bg-green-50 hover:text-green-600"
              >
                Listed Books
              </Link>
            </li>

            <li>
              <Link
                href="/read-books"
                className="rounded-lg hover:bg-green-50 hover:text-green-600"
              >
                Read Books
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost">Sign In</button>

          <button className="btn btn-success rounded-xl px-5 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

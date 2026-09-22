import Link from "next/link";
import React from "react";

const NavbarPage = () => {
  const links = (
    <>
      <li>
        <Link
          className="rounded-full px-4 py-2 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-content"
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className="rounded-full px-4 py-2 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-content"
          href="/books/listedbooks"
        >
          Listed Books
        </Link>
      </li>

      <li>
        <Link
          className="rounded-full px-4 py-2 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-content"
          href="/books"
        >
          All Books
        </Link>
      </li>

      <li>
        <Link
          className="rounded-full px-4 py-2 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-content"
          href="/chart"
        >
          Chart
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300/50 bg-base-100/80 backdrop-blur-xl">
      <div className="navbar container mx-auto min-h-[72px] px-4 lg:px-0">

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-60 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="ml-2 flex items-center gap-2 text-xl font-extrabold tracking-tight lg:ml-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content shadow-lg">
              📚
            </span>

            <span>
              Book<span className="text-primary">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 rounded-full border border-base-300/60 bg-base-200/50 px-2 py-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          <Link
            href="/"
            className="btn btn-ghost hidden rounded-full px-5 font-semibold sm:flex"
          >
            Sign In
          </Link>

          <Link
            href="/"
            className="btn btn-primary rounded-full px-5 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#D9D9D9] text-black h-[65px] flex items-center justify-between sticky top-0 bg-white shadow z-50">
      {/* Logo */}
      <Link href={"/"}>
        {" "}
        <img
          src="/360_F_336663015_sufUaJ1RViG55bMaJmnu3p9Vb2BreUMM.webp"
          alt="logo"
          className="h-[65px] ml-15  "
        />
      </Link>
      <div className="flex items-center border rounded-md px-2 py-1 ml-88">
        <input
          type="search"
          placeholder="Search"
          className="outline-none flex-1"
        />
        <img
          src="/search-interface-symbol.png"
          alt="search"
          className="w-5 h-5 ml-2"
        />
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-6 mr-30">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/product" className="hover:text-gray-400">
            Product
          </Link>
        </li>
        <li>
          <Link href="/features" className="hover:text-gray-400">
            Features
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

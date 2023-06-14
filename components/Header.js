"use client"
import React, { useState } from 'react';
//import onClickOutside from "react-onclickoutside";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Posts" },
    { href: "/contact", text: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div className="bg-gray-100 text-gray-900 sticky top-0 flex items-center justify-between lg:justify-around flex-wrap p-6 w-full">

      <div className="flex flex-col items-center flex-shrink-0 mr-6">
        <Link href="/" className="font-semibold text-gray-900 text-2xl tracking-tight">
          Easy Chinese
        </Link>
        <p className="m-0 text-sm">Through Micro Learning</p>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-700 hover:border-gray-900"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <ul className={`${menuOpen ? "block" : "hidden"} w-full lg:max-w-max flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto m-0 p-0`}>
        <li className="m-0 p-0 list-none ">
        {links.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className={`block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4 ${pathname === href || pathname.includes(href + "/" ) ? "font-bold underline underline-offset-4 decoration-2" : ""}`}
          >
            {text}
          </Link>
        ))}
        </li>
      </ul>
    
    </div>
  );
};


export default Header;
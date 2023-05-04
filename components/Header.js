"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/" className="font-semibold text-xl tracking-tight">My Website
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
           
            <Link href="/" className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${pathname === '/' ? 'font-bold' : ''}`}>
                Home
            </Link>
            <Link href="/about" className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${pathname === '/about' ? 'font-bold' : ''}`}>
                About
            </Link>
            <Link href="/posts" className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${pathname === '/posts' ? 'font-bold' : ''}`}>Posts</Link>
            <Link href="/contact" className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${pathname === '/contact' ? 'font-bold' : ''}`}>
                Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


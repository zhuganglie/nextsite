import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Vocabulary" },
    { href: "/posts", text: "Articles" },
    { href: "/ai", text: "AI" },
    { href: "/contact", text: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const toggleCoursesMenu = () => {
    setCoursesOpen((prevCoursesOpen) => !prevCoursesOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuOpen && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setCoursesOpen(false);
        console.log(menuRef.current);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handler);
    } else {
      document.removeEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [menuOpen]);

  return (
    <div className="bg-gray-100 text-gray-900 sticky top-0 flex items-center justify-between lg:justify-around flex-wrap p-6 w-full">
      <div className="flex flex-col items-center flex-shrink-0 mr-6">
        <Link href="/" className="font-semibold text-gray-900 text-2xl tracking-tight">
          Easy Chinese
        </Link>
        <p className="m-0 text-sm font-serif italic">Bite-Sized Lessons</p>
      </div>

      <div className="block lg:hidden" >
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
      <ul
        ref={menuRef}
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full lg:max-w-max flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto m-0 p-0`}
      >
        <li className="m-0 p-0 list-none">
          {links.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4 ${
                pathname === href || pathname.includes(href + "/")
                  ? "font-bold underline underline-offset-4 decoration-2"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {text}
            </Link>
          ))}
          <div className="relative inline-block">
            <button
              className={`block mt-4 lg:inline-block lg:mt-0 text-gray-900 mr-4 ${
                pathname === "/courses" || pathname.includes("/courses/")
                  ? "font-bold underline underline-offset-4 decoration-2"
                  : ""
              }`}
              onClick={toggleCoursesMenu}
            >
              Courses
            </button>
            {coursesOpen && (
              <div className="md:absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <Link
                  href="/courses/beginner"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Beginner
                </Link>
                <Link
                  href="/courses/intermediate"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Intermediate
                </Link>
                <Link
                  href="/courses/advanced"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Advanced
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
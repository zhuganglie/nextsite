"use client"
import { useState } from 'react';
import './globals.css';
import Header from '../components/Header'; // import Header component
import Footer from '../components/Footer'; // import Footer component


const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      {
      }
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Easy Chinese</title>
      </head>
     <body className="flex flex-col h-screen justify-between bg-gray-50">
     <Header />
  <main className=" flex-1 lg:w-3/5 m-auto lg:p-8">
 
    {children}
  
    </main>
  <Footer />
  </body>
  </html>
  )
}
export default Layout;





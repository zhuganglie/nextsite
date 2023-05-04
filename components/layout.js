import React from 'react';
//import '../styles/globals.css';
import Header from './Header'; // import Header component
import Footer from './Footer'; // import Footer component

const Layout = ({ children }) => {
  return (
     <div className="flex flex-col min-h-screen">
  <Header className="sticky top-0 z-50" /> 
  <main className="flex-1 md:w-3/5 m-auto md:p-8">{children}</main>
  <Footer className="sticky bottom-0 z-50" />
  </div>
  )
}
export default Layout;





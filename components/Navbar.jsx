// components/Navbar.jsx
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoStyle = { 
    fontFamily: "'CustomFont1', serif", 
    letterSpacing: "0.08em",
    textShadow: "0 0 8px rgba(255,0,0,0.3)"
  };
  
  const linkStyle = { 
    fontFamily: "'CustomFont2', sans-serif",
    letterSpacing: "0.05em"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 shadow-md shadow-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold text-white hover:text-red-400 transition-colors duration-300" style={logoStyle}>
              Tech Horizon
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-red-400 transition-colors duration-300" style={linkStyle}>
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-red-400 transition-colors duration-300" style={linkStyle}>
                About
              </Link>
              <Link href="/challenges" className="text-white hover:text-red-400 transition-colors duration-300" style={linkStyle}>
                Challenges
              </Link>
              <Link href="/register" className="px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white transition-colors duration-300" style={linkStyle}>
                Register
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="md:hidden"></div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-red-400"
              style={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-red-400"
              style={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/challenges"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-red-400"
              style={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              Challenges
            </Link>
            <Link
              href="/register"
              className="block px-3 py-3 rounded-md text-base font-medium bg-red-700 text-white hover:bg-red-800"
              style={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

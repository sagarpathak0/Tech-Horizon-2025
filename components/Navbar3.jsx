import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Navigation items
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/challenges', label: 'Challenges' },
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 ${scrolled ? 'bg-black/95' : 'bg-gradient-to-b from-black/95 to-black/80'} shadow-xl border-b-2 border-red-800 backdrop-blur-sm transition-all duration-300 px-6 py-3 z-50 font-morbid tracking-widest`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Video - Shifted Downwards */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="flex justify-center items-start h-15 w-70 overflow-hidden">
              <video 
                className="w-full" 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'screen',
                  height: '300%',
                  objectFit: 'cover',
                  objectPosition: '50% 30%', /* Shifted upward to show lower part of video */
                  transform: 'translateY(-35%)', /* Fine-tune vertical position */
                }}
              >
                <source src="/Tech-horizon-text.mp4" type="video/mp4" />
                TECH HORIZON
              </video>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href} className="py-1">
                <Link href={item.href}>
                  <span 
                    className={`text-xl text-gray-200 hover:text-red-400 transition-all duration-300 relative group ${router.pathname === item.href ? 'text-red-500' : ''}`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="py-1">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white rounded shadow-lg hover:shadow-red-900/30 transition-all duration-300"
                style={{
                  fontFamily: "'DarkDistance', sans-serif",
                  letterSpacing: "0.06em"
                }}
              >
                <span>JOIN NOW</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-red-600 hover:text-red-400 transition-colors duration-300 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3 bg-gradient-to-b from-gray-900 to-black border-t border-red-900/30">
          {navItems.map((item) => (
            <Link 
              href={item.href} 
              key={item.href} 
              onClick={() => setIsOpen(false)}
            >
              <span className={`block py-2 text-lg font-medium ${
                router.pathname === item.href 
                  ? "text-red-500" 
                  : "text-gray-300 hover:text-red-400"
              } transition-colors duration-200`}>
                {item.label}
              </span>
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link 
              href="/register" 
              className="block w-full py-3 text-center bg-gradient-to-r from-red-700 to-red-900 text-white rounded shadow-md"
              style={{
                fontFamily: "'DarkDistance', sans-serif",
                letterSpacing: "0.06em"
              }}
              onClick={() => setIsOpen(false)}
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Morbid';
          src: url('/Morbid.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'DarkDistance';
          src: url('/Dark_Distance.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        .font-morbid {
          font-family: 'Morbid', cursive;
        }
      `}</style>
    </nav>
  );
}
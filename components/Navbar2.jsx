import Link from 'next/link'
import localFont from 'next/font/local'

const bloodcrow = localFont({ 
  src: '../public/bloodcrow.ttf', 
  variable: '--font-bloodcrow'
})

export default function Navbar2() {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-black/90 to-black/40 flex items-center justify-between px-6 py-4.5 z-50 ${bloodcrow.className}`}>
      <><div className="text-xl font-bold text-white">
            <Link href="/">Secret Society</Link>
        </div><ul className="flex space-x-6">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300 relative group">
                        <span>Home</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-gray-300 relative group">
                        <span>About</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link href="/mystery" className="text-white hover:text-gray-300 relative group">
                        <span>Mystery</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-gray-300 relative group">
                        <span>Contact</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </Link>
                </li>
            </ul></>
    </nav>
  )
}
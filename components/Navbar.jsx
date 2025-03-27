// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 flex items-center justify-between px-6 py-4 z-50">
      <div className="text-xl font-bold text-white">
        <Link href="/">Secret Society</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/mystery" className="text-white hover:text-gray-300">Mystery</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

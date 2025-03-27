// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Secret Society | Murder Mystery</title>
        <meta
          name="description"
          content="Dive into a world of clandestine rituals and unsolvable mysteries."
        />
      </Head>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/comic.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              The Secret Society
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Unravel clues hidden in darkness and uncover a murder mystery that defies the ordinary.
            </p>
            <Link
              href="/mystery"
              className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-lg rounded transition duration-300"
            >
              Uncover the Truth
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">A World of Secrets</h2>
            <p className="text-xl mb-8">
              Traverse hidden corridors and decipher cryptic messages to reveal the truth lurking in the shadows.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded shadow">
                <h3 className="text-2xl font-semibold mb-3">Unravel Clues</h3>
                <p>Follow enigmatic hints that guide you into the labyrinth of mystery.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded shadow">
                <h3 className="text-2xl font-semibold mb-3">Hidden Agendas</h3>
                <p>Every figure conceals secrets; every whisper holds danger.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded shadow">
                <h3 className="text-2xl font-semibold mb-3">The Final Revelation</h3>
                <p>Only the brave can piece together the puzzle and unveil the ultimate truth.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

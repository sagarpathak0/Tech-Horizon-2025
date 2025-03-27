// pages/about.js
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Secret Society</title>
        <meta name="description" content="Learn about the origins and secrets of the society." />
      </Head>
      <Navbar />
      <main className="pt-16 p-8 bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-4">About the Society</h1>
        <p className="max-w-3xl mb-8">
          Our society was founded in the shadows, dedicated to preserving forbidden truths and uncovering mysteries that defy explanation.
        </p>
        <Link href="/" className="inline-block text-red-600 hover:underline">
          Back to Home
        </Link>
      </main>
    </>
  )
}

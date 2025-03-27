import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <Head>
        <title>Tech Horizon | Exclusive Hackathon</title>
        <meta
          name="description"
          content="The exclusive hackathon where elite developers gather to forge the future of web technology."
        />
        <style jsx global>{`
          h1, h2, h3 {
            font-family: 'CustomFont1', 'Cinzel', serif;
          }
          p {
            font-family: 'CustomFont2', 'Crimson Text', serif;
          }
          body {
            font-family: 'Source Sans Pro', sans-serif;
          }
          .logo-glow {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.9)) 
                   drop-shadow(0 0 25px rgba(255, 0, 0, 0.8))
                   drop-shadow(0 0 35px rgba(255, 60, 60, 0.6));
            animation: strongGlow 3s ease-in-out infinite alternate;
          }
          @keyframes strongGlow {
            0% {
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)) 
                     drop-shadow(0 0 20px rgba(255, 0, 0, 0.7))
                     drop-shadow(0 0 30px rgba(255, 60, 60, 0.5));
              transform: scale(0.98);
            }
            100% {
              filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1)) 
                     drop-shadow(0 0 40px rgba(255, 0, 0, 0.9))
                     drop-shadow(0 0 60px rgba(255, 60, 60, 0.8));
              transform: scale(1.02);
            }
          }
          @font-face {
            font-family: 'DarkDistance';
            src: url('/Dark_Distance.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          .elite-button {
            font-family: 'DarkDistance', sans-serif;
            letter-spacing: 0.06em;
          }
        `}</style>
      </Head>
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/background_hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 px-4">
          {/* GDG Logo with enhanced glow effect */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image 
                src="/GDG_logo.png" 
                alt="GDG Logo" 
                width={330} 
                height={330}
                className="logo-glow"
              />
            </div>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-wider"
            style={{ 
              fontFamily: "'CustomFont1', serif",
              letterSpacing: "0.08em", // Adjusted for Mount Hills font
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)"
            }}
          >
            Tech Horizon
          </h1>
          <p 
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'CustomFont2', serif",
              letterSpacing: "0.02em"
            }}
          >
            The exclusive hackathon where elite developers gather to forge the future of web technology.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-lg rounded transition duration-300 elite-button"
            style={{ 
              fontFamily: "'DarkDistance', sans-serif",
              letterSpacing: "0.06em",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)"
            }}
          >
            Join the Elite
          </Link>
        </div>
      </section>
    </div>
  )
}

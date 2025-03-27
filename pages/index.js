// pages/index.js
import Head from 'next/head'
import Hero from '@/components/Hero'
import WhyParticipate from '@/components/WhyParticipate'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Horizon | Secret Society Hackathon</title>
        <meta
          name="description"
          content="Join the elite Tech Horizon hackathon - where innovation meets mystery in the ultimate web development challenge."
        />
        <style jsx global>{`
          h1, h2 {
            font-family: 'CustomFont1', 'Cinzel', serif;
            letter-spacing: 0.05em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
          h3 {
            font-family: 'CustomFont1', 'Cinzel', serif;
            letter-spacing: 0.03em;
          }
          p {
            font-family: 'CustomFont2', 'Crimson Text', serif;
            letter-spacing: 0.01em;
          }
          body {
            font-family: 'Source Sans Pro', sans-serif;
            color: #f0f0f0;
          }
          .nav-link {
            font-family: 'CustomFont2', 'Philosopher', sans-serif;
            letter-spacing: 0.04em;
          }
          .feature-card {
            transition: all 0.3s ease;
          }
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          }
        `}</style>
      </Head>
      <main className="pt-16">
        {/* Hero Section */}
        <Hero/>

        {/* Why Participate Section */}
        <WhyParticipate />
      </main>
    </>
  )
}

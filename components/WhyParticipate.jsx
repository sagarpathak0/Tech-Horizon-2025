import React from 'react'

export default function WhyParticipate() {
  const titleStyle = {
    fontFamily: "'CustomFont1', serif",
    letterSpacing: "0.07em",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
  };
  
  const textStyle = {
    fontFamily: "'CustomFont2', serif",
    letterSpacing: "0.02em"
  };
  
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6" style={titleStyle}>Why Join Tech Horizon</h2>
        <p className="text-xl mb-12" style={textStyle}>
          Enter our clandestine tech collective and push the boundaries of web development in this exclusive hackathon.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700">
            <div className="mb-4 text-red-500 text-4xl">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={titleStyle}>Cutting-Edge Challenges</h3>
            <p style={textStyle}>Test your skills with advanced web development problems that push technological boundaries.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700">
            <div className="mb-4 text-red-500 text-4xl">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={titleStyle}>Elite Network</h3>
            <p style={textStyle}>Connect with industry pioneers and fellow tech innovators in our exclusive community.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700">
            <div className="mb-4 text-red-500 text-4xl">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={titleStyle}>Prestigious Prizes</h3>
            <p style={textStyle}>Compete for coveted awards and recognition from leading tech companies and investors.</p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700">
            <div className="mb-4 text-red-500 text-4xl">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={titleStyle}>Innovation Incubator</h3>
            <p style={textStyle}>Transform concepts into groundbreaking prototypes with expert guidance and cutting-edge tools.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded shadow transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700">
            <div className="mb-4 text-red-500 text-4xl">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={titleStyle}>Launch Your Career</h3>
            <p style={textStyle}>Showcase your talents to industry recruiters and accelerate your path in the tech world.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

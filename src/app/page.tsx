'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "InnovateAI - Your AI Future";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#212529" /><stop offset="100%" stop-color="#3b82f6" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#212529] text-[#E9ECEF] font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#212529] bg-opacity-90 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-[#E9ECEF] hover:text-[#3b82f6] transition-colors duration-300">InnovateAI</a>

          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-lg hover:text-[#3b82f6] transition-colors duration-300">Home</a>
            <a href="#about" className="text-lg hover:text-[#3b82f6] transition-colors duration-300">About</a>
            <a href="#contact" className="text-lg hover:text-[#3b82f6] transition-colors duration-300">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#E9ECEF] hover:text-[#3b82f6] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#212529] bg-opacity-95 shadow-lg`}>
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#hero" onClick={toggleMenu} className="text-xl py-2 hover:text-[#3b82f6] transition-colors duration-300">Home</a>
            <a href="#about" onClick={toggleMenu} className="text-xl py-2 hover:text-[#3b82f6] transition-colors duration-300">About</a>
            <a href="#contact" onClick={toggleMenu} className="text-xl py-2 hover:text-[#3b82f6] transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center p-4 pt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#E9ECEF] mb-6 leading-tight">
            Your AI Future Starts Here
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-[#E9ECEF] mb-10">
            Welcome to InnovateAI. We are a new AI startup dedicated to pushing the boundaries of artificial intelligence. Explore how we can transform your world.
          </p>
          <a href="#contact" className="px-8 py-4 bg-[#3b82f6] text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 animate-pulse">
            Get in Touch
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E9ECEF] mb-12">
            About InnovateAI
          </h2>
          <div className="grid md:grid-cols-1 gap-12 text-left">
            <p className="text-lg leading-relaxed text-[#E9ECEF] text-center">
              InnovateAI is at the forefront of AI innovation, developing cutting-edge solutions that solve complex challenges and create new opportunities. Our team of experts is dedicated to building intelligent systems that are intuitive, efficient, and transformative. We believe in the power of AI to drive progress and improve lives across various industries.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E9ECEF] mb-12">
            Contact Us
          </h2>
          <div className="flex flex-col items-center space-y-4 text-lg">
            <p className="text-[#E9ECEF]">
              Email: <a href="mailto:test@innovate.ai" className="text-[#3b82f6] hover:underline">test@innovate.ai</a>
            </p>
            <p className="text-[#E9ECEF]">
              Phone: <a href="tel:123456789" className="text-[#3b82f6] hover:underline">123 456 789</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-[#E9ECEF] border-t border-[#343a40]">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">DigitalFusion</a>
      </footer>
    </div>
  );
}

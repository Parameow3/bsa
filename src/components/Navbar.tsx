'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#1C3A62] text-white py-2 w-full">
        <div className="w-full flex justify-end items-center px-4 sm:px-6" style={{ gap: '1.5rem' }}>
          <a href="#" className="text-xs sm:text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF', display: 'inline-block' }}>
            On Demand Exam Booking
          </a>
          <a href="#" className="bg-[#FF0000] text-white rounded-none font-semibold hover:bg-[#CC0000] transition-colors whitespace-nowrap no-underline text-xs sm:text-sm" style={{ color: '#FFFFFF', padding: '0.5rem 1rem', display: 'inline-block' }}>
            MyACCA
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#1C68B4] text-white py-3 sm:py-5 w-full">
        <div className="w-full flex items-center px-4 sm:px-6" style={{ justifyContent: 'space-between' }}>
          {/* Left: Logos */}
          <div className="flex items-center gap-3 sm:gap-6" style={{ flexShrink: 0 }}>
            <Image
              src="/bsa_logo.png"
              alt="BSA Logo"
              width={180}
              height={90}
              className="h-10 sm:h-16 md:h-20 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation Links */}
          {isDesktop && (
          <div className="items-center text-white" style={{ 
            gap: '2rem', 
            flex: '1 1 auto', 
            justifyContent: 'center',
            display: 'flex'
          }}>
            {/* About */}
            <a href="#" className="font-semibold text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
              About
            </a>

            {/* Programmes */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setProgrammesOpen(true);
                setContactOpen(false);
              }}
              onMouseLeave={() => setProgrammesOpen(false)}
            >
              <a
                href="#"
                className="font-semibold text-white no-underline hover:underline whitespace-nowrap"
                style={{ color: '#FFFFFF', fontSize: '1.25rem' }}
              >
                Programmes
              </a>
              {programmesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 flex flex-col gap-2 pt-2 bg-[#1C68B4] p-2 rounded shadow-lg z-50"
                  onMouseEnter={() => setProgrammesOpen(true)}
                  onMouseLeave={() => setProgrammesOpen(false)}
                >
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap px-2 py-1" style={{ color: '#FFFFFF' }}>
                    Courses
                  </a>
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap px-2 py-1" style={{ color: '#FFFFFF' }}>
                    Interest Form
                  </a>
                </div>
              )}
            </div>

            {/* Events & Insights */}
            <a href="#" className="font-semibold text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>
              Events & Insights
            </a>

            {/* Contact */}
            <div 
              className="relative"
              onMouseEnter={() => {
                setContactOpen(true);
                setProgrammesOpen(false);
              }}
              onMouseLeave={() => setContactOpen(false)}
            >
              <a
                href="#"
                className="font-semibold text-white no-underline hover:underline whitespace-nowrap"
                style={{ color: '#FFFFFF', fontSize: '1.25rem' }}
              >
                Contact
              </a>
              {contactOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 flex flex-col gap-2 pt-2 bg-[#1C68B4] p-2 rounded shadow-lg z-50"
                  onMouseEnter={() => setContactOpen(true)}
                  onMouseLeave={() => setContactOpen(false)}
                >
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap px-2 py-1" style={{ color: '#FFFFFF' }}>
                    Contact Us
                  </a>
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap px-2 py-1" style={{ color: '#FFFFFF' }}>
                    Complaint Form
                  </a>
                </div>
              )}
            </div>
          </div>
          )}

          {/* Right: Partner Badges (Desktop) */}
          {isDesktop && (
          <div className="items-center" style={{ gap: '0.75rem', flexShrink: 0, display: 'flex' }}>
            <Image
              src="/Silver_partner.png"
              alt="Silver Learning Partner"
              width={200}
              height={60}
              className="h-10 lg:h-14 w-auto object-contain"
              priority
            />
            <Image
              src="/acca_licensed.png"
              alt="ACCA Licensed CBE Centre"
              width={120}
              height={120}
              className="h-16 lg:h-24 w-auto object-contain"
              priority
            />
          </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
            style={{ flexShrink: 0, padding: '0.5rem', color: '#FFFFFF' }}
          >
            <svg 
              width="24" 
              height="24" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          )}

        </div>

        {/* Mobile Menu */}
        {!isDesktop && mobileMenuOpen && (
          <div className="bg-[#1C68B4] border-t border-[#1C3A62] py-4 px-4">
            <div className="flex flex-col gap-4">
              {/* About */}
              <a 
                href="#" 
                className="font-semibold text-white no-underline hover:underline py-2" 
                style={{ color: '#FFFFFF', fontSize: '1.125rem' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>

              {/* Programmes */}
              <div className="flex flex-col">
                <button
                  onClick={() => setProgrammesOpen(!programmesOpen)}
                  className="font-semibold text-white no-underline hover:underline py-2 text-left flex items-center justify-between"
                  style={{ color: '#FFFFFF', fontSize: '1.125rem' }}
                >
                  Programmes
                  <svg className={`w-5 h-5 transition-transform ${programmesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {programmesOpen && (
                  <div className="flex flex-col gap-2 pl-4 mt-2">
                    <a 
                      href="#" 
                      className="font-normal text-base text-white no-underline hover:underline py-1" 
                      style={{ color: '#FFFFFF' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Courses
                    </a>
                    <a 
                      href="#" 
                      className="font-normal text-base text-white no-underline hover:underline py-1" 
                      style={{ color: '#FFFFFF' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Interest Form
                    </a>
                  </div>
                )}
              </div>

              {/* Events & Insights */}
              <a 
                href="#" 
                className="font-semibold text-white no-underline hover:underline py-2" 
                style={{ color: '#FFFFFF', fontSize: '1.125rem' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Events & Insights
              </a>

              {/* Contact */}
              <div className="flex flex-col">
                <button
                  onClick={() => setContactOpen(!contactOpen)}
                  className="font-semibold text-white no-underline hover:underline py-2 text-left flex items-center justify-between"
                  style={{ color: '#FFFFFF', fontSize: '1.125rem' }}
                >
                  Contact
                  <svg className={`w-5 h-5 transition-transform ${contactOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {contactOpen && (
                  <div className="flex flex-col gap-2 pl-4 mt-2">
                    <a 
                      href="#" 
                      className="font-normal text-base text-white no-underline hover:underline py-1" 
                      style={{ color: '#FFFFFF' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </a>
                    <a 
                      href="#" 
                      className="font-normal text-base text-white no-underline hover:underline py-1" 
                      style={{ color: '#FFFFFF' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Complaint Form
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Partner Badges */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1C3A62] mt-4">
                <Image
                  src="/Silver_partner.png"
                  alt="Silver Learning Partner"
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain"
                  priority
                />
                <Image
                  src="/acca_licensed.png"
                  alt="ACCA Licensed CBE Centre"
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

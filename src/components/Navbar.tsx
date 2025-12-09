'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#1C3A62] text-white py-2 w-full">
        <div className="w-full flex justify-end items-center px-6" style={{ gap: '1.5rem' }}>
          <a href="#" className="text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF' }}>
            On Demand Exam Booking
          </a>
          <a href="#" className="bg-[#FF0000] text-white rounded-none font-semibold hover:bg-[#CC0000] transition-colors whitespace-nowrap no-underline" style={{ color: '#FFFFFF', padding: '0.75rem 1.5rem', display: 'inline-block' }}>
            MyACCA
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#1C68B4] text-white py-5 w-full">
        <div className="w-full flex items-center justify-between px-6">
          {/* Left: Logos */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <Image
              src="/bsa_logo.png"
              alt="BSA Logo"
              width={180}
              height={90}
              className="h-auto object-contain"
              priority
            />
          </div>

          {/* Middle: Navigation Links */}
          <div className="flex items-center flex-grow justify-center text-white" style={{ gap: '2rem' }}>
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
                  className="absolute top-full left-0 mt-2 flex flex-col gap-2 pt-2"
                  onMouseEnter={() => setProgrammesOpen(true)}
                  onMouseLeave={() => setProgrammesOpen(false)}
                >
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                    Courses
                  </a>
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF' }}>
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
                  className="absolute top-full left-0 mt-2 flex flex-col gap-2 pt-2"
                  onMouseEnter={() => setContactOpen(true)}
                  onMouseLeave={() => setContactOpen(false)}
                >
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                    Contact Us
                  </a>
                  <a href="#" className="font-normal text-sm text-white no-underline hover:underline whitespace-nowrap" style={{ color: '#FFFFFF' }}>
                    Complaint Form
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: Partner Badges */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/Silver_partner.png"
              alt="Silver Learning Partner"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
            <Image
              src="/acca_licensed.png"
              alt="ACCA Licensed CBE Centre"
              width={120}
              height={120}
              className="h-24 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

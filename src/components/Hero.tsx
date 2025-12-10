'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full relative">
      {/* Hero Image with Overlaid Text */}
      <div className="w-full relative h-[400px] sm:h-[550px] md:h-[700px] lg:h-[800px]">
        <Image
          src="/hero.jpg"
          alt="Business School of Accountancy background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 1 }}></div>
        
        {/* Text Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 lg:px-8" style={{ width: '100%', maxWidth: '1200px' }}>
            <h1 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-ibm-plex-sans)', color: '#FFFFFF', textAlign: 'center', marginBottom: '0', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.3)' }}>
              <span className="block mt-2" style={{ color: '#FFFFFF', fontSize: 'clamp(2.25rem, 5vw, 4rem)', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.3)' }}>
                Business School of
              </span>
              <span className="block mt-2" style={{ color: '#FFFFFF', fontSize: 'clamp(2.75rem, 6vw, 5rem)', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.3)' }}>
                Accountancy
              </span>
            </h1>
            <p className="font-bold" style={{ fontFamily: 'var(--font-ibm-plex-sans)', color: '#FFFFFF', textAlign: 'center', fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginTop: '0', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6), 0 0 8px rgba(0, 0, 0, 0.3)' }}>
              #Shaping Cambodia Finance Leaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C68B4] text-white font-ibm-plex" style={{ marginBottom: 0, paddingBottom: 0 }}>
      {/* Top Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center w-full gap-4 sm:gap-0" data-top-section>
          {/* Left: Logo Area */}
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
            <Image
              src="/bsa_logo.png"
              alt="BSA Logo"
              width={200}
              height={100}
              className="h-8 sm:h-12 lg:h-16 w-auto object-contain"
              priority
            />
          </div>

          {/* Right: Social Media */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
            <h3 className="text-xs sm:text-sm lg:text-base font-bold tracking-wide text-white mb-2 sm:mb-2 lg:mb-3 text-center sm:text-right" style={{ color: '#FFFFFF' }}>Social Media</h3>
            <div className="flex flex-wrap justify-center sm:justify-end w-full sm:w-auto" style={{ gap: '8px', maxWidth: '100%' }}>
              {/* Facebook */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#FFFFFF" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#FFFFFF" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#FFFFFF" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="X (Twitter)"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FFFFFF" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="TikTok"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FFFFFF" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Telegram"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ minWidth: '20px', minHeight: '20px' }}>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#FFFFFF" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Navigation Columns */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Mobile & Tablet: Grid layout - hidden on lg and above */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:hidden justify-items-center sm:justify-items-start py-6 sm:py-6 md:py-8" data-mobile-footer>
          {/* Column 1: LEGAL */}
          <div className="flex flex-col gap-2 sm:gap-2 md:gap-3 items-center sm:items-start text-center sm:text-left w-full">
            <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              LEGAL
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Privacy Policy Terms
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Conditions Terms
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Conditions – ACCA
              </a>
            </div>
          </div>

          {/* Column 2: CONTACT */}
          <div className="flex flex-col gap-2 sm:gap-2 md:gap-3 items-center sm:items-start text-center sm:text-left w-full">
            <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              CONTACT
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Complaint Form
              </a>
            </div>
          </div>

          {/* Column 3: PROGRAMMES */}
          <div className="flex flex-col gap-2 sm:gap-2 md:gap-3 items-center sm:items-start text-center sm:text-left w-full">
            <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              PROGRAMMES
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Courses
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm md:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Interest Form
              </a>
            </div>
          </div>

          {/* Column 4: ABOUT */}
          <div className="flex flex-col gap-2 sm:gap-2 md:gap-3 items-center sm:items-start text-center sm:text-left w-full">
            <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              ABOUT
            </h3>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left" style={{ gap: '0.125rem', margin: 0, padding: 0 }}>
              <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF', margin: 0 }}>
                EVENTS & INSIGHTS
              </h3>
              <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF', margin: 0 }}>
                ON DEMAND EXAM BOOKING
              </h3>
            </div>
          </div>
        </div>

        {/* Desktop: Original flex layout - shown only on lg and above */}
        <div
          className="flex-row justify-center items-start"
          style={{
            gap: '3rem',
            display: 'none'
          }}
          data-desktop-footer
        >
          {/* Column 1: LEGAL */}
          <div className="flex flex-col gap-3 items-start text-left">
            <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              LEGAL
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Privacy Policy Terms
              </a>
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Conditions Terms
              </a>
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Conditions – ACCA
              </a>
            </div>
          </div>

          {/* Column 2: CONTACT */}
          <div className="flex flex-col gap-3 items-start text-left">
            <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              CONTACT
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Complaint Form
              </a>
            </div>
          </div>

          {/* Column 3: PROGRAMMES */}
          <div className="flex flex-col gap-3 items-start text-left">
            <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              PROGRAMMES
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Courses
              </a>
              <a
                href="#"
                className="text-sm lg:text-base font-normal text-white hover:underline no-underline"
                style={{ color: '#FFFFFF' }}
              >
                Interest Form
              </a>
            </div>
          </div>

          {/* Column 4: ABOUT */}
          <div className="flex flex-col gap-3 items-start text-left">
            <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF' }}>
              ABOUT
            </h3>
            <div className="flex flex-col items-start text-left" style={{ gap: '0.125rem', margin: 0, padding: 0 }}>
              <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF', margin: 0 }}>
                EVENTS & INSIGHTS
              </h3>
              <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide text-white" style={{ color: '#FFFFFF', margin: 0 }}>
                ON DEMAND EXAM BOOKING
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6" style={{ marginBottom: 0, paddingBottom: 0, marginTop: '12px', borderTop: '1px solid #FFFFFF' }}>
        <div className="flex items-center justify-center">
          <p className="text-xs sm:text-sm font-normal text-white text-center" style={{ color: '#FFFFFF' }}>
            © 2025 BSA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

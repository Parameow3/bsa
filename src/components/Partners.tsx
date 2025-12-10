'use client';

import Image from 'next/image';
import { Building2, GraduationCap } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

interface PartnersProps {
  mainHeading?: string;
  schoolPartners?: Partner[];
  firmPartners?: Partner[];
}

const defaultSchoolPartners: Partner[] = [
  { name: 'Silver Partner', logo: '/Silver_partner.png' }
];

const defaultFirmPartners: Partner[] = [
  { name: 'ACCA Licensed', logo: '/acca_licensed.png' }
];

export default function Partners({
  mainHeading = 'Our Partners',
  schoolPartners = defaultSchoolPartners,
  firmPartners = defaultFirmPartners
}: PartnersProps) {
  
  const PartnerCard = ({ partner }: { partner: Partner }) => (
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: '140px',
        cursor: partner.website ? 'pointer' : 'default'
      }}
      onClick={() => {
        if (partner.website) {
          window.open(partner.website, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        ) : (
          <div className="text-center">
            <p 
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#9CA3AF',
                fontWeight: '500'
              }}
            >
              {partner.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const PartnerSection = ({ 
    title, 
    partners, 
    icon 
  }: { 
    title: string; 
    partners: Partner[]; 
    icon: React.ReactNode;
  }) => (
    <div style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
      {/* Section Header */}
      <div 
        className="flex items-center justify-center"
        style={{ 
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          gap: '1rem'
        }}
      >
        <div 
          className="inline-flex items-center justify-center"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#EFF6FF',
            borderRadius: '0.75rem',
            color: '#1C68B4'
          }}
        >
          {icon}
        </div>
        <h3 
          className="font-bold"
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#374151',
            margin: 0,
            lineHeight: '1.2'
          }}
        >
          {title}
        </h3>
      </div>

      {/* Partners Grid */}
      {partners.length > 0 ? (
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      ) : (
        <div 
          className="text-center"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            backgroundColor: '#F9FAFB',
            borderRadius: '0.75rem',
            border: '2px dashed #E5E7EB'
          }}
        >
          <p 
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              color: '#9CA3AF',
              margin: 0
            }}
          >
            Partner logos coming soon
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section 
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#F9FAFB',
        padding: 'clamp(2rem, 5vw, 3rem) 0'
      }}
    >
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 left-0 opacity-5"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #1C68B4 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 opacity-5"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, #1C68B4 0%, transparent 70%)',
          transform: 'translate(50%, 50%)'
        }}
      />

      <div 
        className="relative"
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1rem, 4vw, 3rem)',
          paddingRight: 'clamp(1rem, 4vw, 3rem)'
        }}
      >
        {/* Main Header */}
        <div className="text-center" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h2 
            className="font-bold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#1C68B4',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
          >
            {mainHeading}
          </h2>
          
          <p 
            className="leading-relaxed"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#6B7280',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.7'
            }}
          >
            We collaborate with leading educational institutions and professional firms to provide our students with the best opportunities and resources.
          </p>
        </div>

        {/* Partner Sections Side by Side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          <PartnerSection 
            title="School Partners"
            partners={schoolPartners}
            icon={<GraduationCap size={28} strokeWidth={2} />}
          />

          <PartnerSection 
            title="Firm Partners"
            partners={firmPartners}
            icon={<Building2 size={28} strokeWidth={2} />}
          />
        </div>
      </div>
    </section>
  );
}

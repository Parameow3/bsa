'use client';

interface CertificationCard {
  type: 'PROFESSIONAL' | 'CERTIFICATE' | 'DIPLOMA';
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  readMoreLink?: string;
}

interface ACCACertificationsProps {
  title?: string;
  heading?: string;
  description?: string;
  certifications?: CertificationCard[];
  seeMoreLink?: string;
}

const defaultCertifications: CertificationCard[] = [
  {
    type: 'PROFESSIONAL',
    title: 'ACCA PROFESSIONAL',
    subtitle: 'Diploma in Sustainability (ProDipSust)',
    heading: 'Stay Ahead with Sustainability:',
    description: 'The Future of Our Profession To remain relevant, it\'s time to upskill in sustainability—or risk being left behind. Embrace change and unlock your potential with ACCA\'s Professional Diploma in Sustainability.',
    readMoreLink: '#'
  },
  {
    type: 'CERTIFICATE',
    title: 'ACCA CERTIFICATE',
    subtitle: 'In Business Valuations',
    heading: 'About the Certificate',
    description: 'Developed through a strategic partnership between ACCA and the Conseil Supérieur Ordre Des Experts-Comptables (CSOEC), the Certificate in Business Valuations is a globally recognized qualification tailored to meet the demands of qualified accountants, finance professionals, and employers worldwide.',
    readMoreLink: '#'
  },
  {
    type: 'DIPLOMA',
    title: 'ACCA DIPLOMA',
    subtitle: 'International Financial Reporting (DipIFR)',
    heading: 'About the DIPLOMA',
    description: 'If you are a finance professional who is not already knowledgeable about the details of International Financial Reporting Standards (IFRS), this qualification has a fast and efficient solution to meet your needs. If you need to develop a working knowledge of the area, the DipIFR can help prepare you.',
    readMoreLink: '#'
  }
];

export default function ACCACertifications({
  title = 'Programme/ ACCA Professional Certifications',
  heading = 'Quality Education, Global Recognition',
  description = 'At BSA Education, we are committed to shaping the future of professional accountancy by offering world-renowned programs that empower our students to achieve excellence.',
  certifications = defaultCertifications,
  seeMoreLink = '#'
}: ACCACertificationsProps) {
  const getHeaderColor = (type: string) => {
    switch (type) {
      case 'PROFESSIONAL':
        return '#22C55E'; // green
      case 'CERTIFICATE':
        return '#EAB308'; // yellow
      case 'DIPLOMA':
        return '#06B6D4'; // cyan
      default:
        return '#1C68B4'; // default blue
    }
  };

  return (
    <section className="w-full" style={{ 
      background: 'linear-gradient(to bottom, #E0F2FE, #FFFFFF)',
      padding: 'clamp(2rem, 5vw, 3rem) 0'
    }}>
      <div className="mb-12" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(0.5rem, 2vw, 0.55rem)',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'clamp(1rem, 4vw, 3rem)',
        paddingRight: 'clamp(1rem, 4vw, 3rem)'
      }}>
        {/* Column 1: Left Content Block */}
        <div className="flex flex-col justify-center">
          <h2 className="font-bold" style={{ 
            color: '#1F2937',
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            marginBottom: '0rem',
            lineHeight: '1.2'
          }}>
            {heading}
          </h2>
          <p className="text-gray-700 leading-relaxed" style={{ 
            color: '#374151',
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>
            {description}
          </p>
        </div>

        {/* Columns 2-4: Cards */}
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Card Header */}
                <div
                  className="text-white font-bold"
                  style={{ 
                    backgroundColor: getHeaderColor(cert.type),
                    padding: 'clamp(0.75rem, 2vw, 0.8rem)'
                  }}
                >
                  <h3 className="uppercase" style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    lineHeight: '1',
                    color: '#FFFFFF',
                    margin: '0',
                    marginBottom: '0.3rem',
                    fontSize: 'clamp(1rem, 2vw, 1.50rem)'
                  }}>
                    {cert.title}
                  </h3>
                  <p className="font-normal" style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    opacity: '1',
                    color: '#FFFFFF',
                    margin: '0',
                    lineHeight: '1',
                    fontSize: '0.80rem',
                    fontWeight: '500'
                  }}>
                    {cert.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="flex-1 flex flex-col" style={{ 
                  backgroundColor: '#F9FAFB',
                  padding: 'clamp(0.75rem, 2vw, 0.75rem)'
                }}>
                  <h5 className="font-bold" style={{ 
                    color: '#6B7280',
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    marginTop: '0',
                    paddingTop: '0',
                    marginBottom: '0',
                    paddingBottom: '0',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)'
                  }}>
                    {cert.heading}
                  </h5>
                  
                  <p className="text-sm flex-1 leading-relaxed" style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    marginTop: '0.5rem',
                    paddingTop: '0',
                    marginBottom: '0'
                  }}>
                    {cert.description}
                  </p>
                  
                  <a
                    href={cert.readMoreLink}
                    className="font-semibold text-lg no-underline inline-block hover:underline"
                    style={{ 
                      color: '#2563EB',
                      fontFamily: 'var(--font-ibm-plex-sans)'
                    }}
                  >
                    Read More »
                  </a>
                </div>
              </div>
            ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <a
            href={seeMoreLink}
            className="no-underline inline-block transition-all duration-300"
            style={{ 
              backgroundColor: '#1C68B4',
              color: '#FFFFFF',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              padding: '0.65rem 2.5rem',
              borderRadius: '2rem',
              border: '2px solid transparent',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1C3A62';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1C68B4';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
          >
            SEE MORE
          </a>
        </div>
    </section>
  );
}

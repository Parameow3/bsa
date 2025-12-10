'use client';

import { BookOpen, Users, Award, Laptop, Target, HeadphonesIcon } from 'lucide-react';

interface FeatureCard {
  icon: 'book' | 'users' | 'award' | 'laptop' | 'target' | 'headphones';
  title: string;
  description: string;
}

interface WhyChooseBSAProps {
  mainHeading?: string;
  subHeading?: string;
  description?: string;
  features?: FeatureCard[];
}

const defaultFeatures: FeatureCard[] = [
  {
    icon: 'book',
    title: 'Extensive Range of Courses',
    description: 'Choose from a wide variety of courses specifically designed to suit your individual needs'
  },
  {
    icon: 'laptop',
    title: 'Unrivalled Learning Technology',
    description: 'Utilise high-tech features for easier comprehension and mobile learning'
  },
  {
    icon: 'target',
    title: 'Objective Learning',
    description: 'Experience training through an interactive milestones completion approach'
  },
  {
    icon: 'users',
    title: 'Personalised teaching',
    description: 'Customised, affordable training tailored to suit your needs'
  },
  {
    icon: 'award',
    title: 'Excellent Tutors',
    description: 'BPP certified tutors who have successfully trained and produced award-winning students'
  },
  {
    icon: 'headphones',
    title: '24/7 Support',
    description: 'Our professional team of tutors and admins are here for you anytime'
  }
];

export default function WhyChooseBSA({
  mainHeading = 'Why Pursue Your Studies With BSA',
  subHeading = 'Excellence in Education',
  description = 'BSA is committed to providing high-quality education and support to help you achieve your professional goals. Our comprehensive approach combines cutting-edge technology with personalized attention to ensure your success.',
  features = defaultFeatures
}: WhyChooseBSAProps) {
  
  const getIcon = (iconType: string) => {
    const iconProps = {
      size: 40,
      strokeWidth: 1.5
    };
    
    switch (iconType) {
      case 'book':
        return <BookOpen {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      case 'award':
        return <Award {...iconProps} />;
      case 'laptop':
        return <Laptop {...iconProps} />;
      case 'target':
        return <Target {...iconProps} />;
      case 'headphones':
        return <HeadphonesIcon {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  return (
    <section 
      className="w-full relative overflow-hidden"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(2rem, 5vw, 3rem) 0'
      }}
    >
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 opacity-5"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #1C68B4 0%, transparent 70%)',
          transform: 'translate(50%, -50%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 opacity-5"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, #1C68B4 0%, transparent 70%)',
          transform: 'translate(-50%, 50%)'
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
        {/* Header Section */}
        <div className="text-center" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h2 
            className="font-bold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#1C68B4',
              marginBottom: '0.5rem',
              lineHeight: '1.2'
            }}
          >
            {mainHeading}
          </h2>
          
          <h3 
            className="font-semibold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: '#374151',
              marginBottom: '1.5rem',
              lineHeight: '1.4'
            }}
          >
            {subHeading}
          </h3>
          
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
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white overflow-hidden transition-all duration-300"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '0.75rem',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1C68B4';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Icon Container */}
              <div 
                className="inline-flex items-center justify-center transition-all duration-300"
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#EFF6FF',
                  borderRadius: '0.75rem',
                  color: '#1C68B4',
                  marginBottom: '1.25rem'
                }}
              >
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h4 
                className="font-bold"
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: '#1F2937',
                  marginBottom: '0.75rem',
                  lineHeight: '1.3'
                }}
              >
                {feature.title}
              </h4>
              
              <p 
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  margin: '0'
                }}
              >
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div 
                className="absolute bottom-0 left-0 transition-all duration-300"
                style={{
                  width: '0%',
                  height: '3px',
                  backgroundColor: '#1C68B4'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className="text-center"
          style={{ marginTop: 'clamp(3rem, 5vw, 4rem)' }}
        >
          <p 
            className="font-semibold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#374151',
              marginBottom: '1.5rem'
            }}
          >
            Ready to start your journey with BSA?
          </p>
          
          <div className="flex flex-wrap justify-center" style={{ gap: '1.5rem' }}>
            <a
              href="#contact"
              className="no-underline inline-block transition-all duration-300"
              style={{
                backgroundColor: '#1C68B4',
                color: '#FFFFFF',
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '0.875rem 2.5rem',
                borderRadius: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                border: 'none'
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
              Get Started Today
            </a>
            
            <a
              href="#programs"
              className="no-underline inline-block transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: '#1C68B4',
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '0.875rem 2.5rem',
                borderRadius: '2rem',
                border: '2px solid #1C68B4',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EFF6FF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

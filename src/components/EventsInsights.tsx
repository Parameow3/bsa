'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Newspaper, Lightbulb } from 'lucide-react';

interface InsightItem {
  icon: 'news' | 'events' | 'insights';
  title: string;
  description: string;
  tag: string;
  date?: string;
  image?: string;
  details?: string[];
  hashtags?: string[];
}

const items: InsightItem[] = [
  {
    icon: 'news',
    title: 'BSA opens new professional pathways',
    description: 'Expanded programmes designed to keep you ahead of industry expectations.',
    tag: 'News',
    date: 'November 17 2025',
    image: '/new1.jpg',
    details: [
      'A historic moment for Cambodia. The IFAC Council has approved KICPAA as a full member with the leadership of ACAR and the sponsorship of ACCA. This recognition places Cambodia within a global system that defines quality, ethics, and trust in the accounting profession.',
      'This achievement benefits students and young professionals. You gain access to higher training standards, clearer career pathways, and stronger international recognition. Global expectations will rise, and so will opportunities for those who prepare well.',
      'This membership lifts the credibility of the profession. It supports regulatory progress, encourages continuous learning, and motivates all stakeholders to aim higher.',
      'BSA congratulates KICPAA on securing full IFAC membership. This milestone signals a future where Cambodian talent grows stronger and more globally competitive.'
    ],
    hashtags: ['#Congratulations', '#bsa', '#KICPAA', '#IFAC', '#ACCA']
  },
  {
    icon: 'events',
    title: 'ACCA prep bootcamps launching soon',
    description: 'Intensive workshops with live Q&A from certified tutors.',
    tag: 'Events',
    image: '/event1.jpg',
    details: [
      '[English Below]',
      'អបអរសាទរ គម្រប់ខួប ១ ឆ្នាំ នៃការប្រកាសជាផ្លូវការលើកម្មវិធីសិក្សា សញ្ញាបត្រវិជ្ជាជីវៈ ស្តង់ដាចីរភាពរបស់ ACCA (ProDipSust)!',
      'ចុះឈ្មោះចូលរៀនកម្មវិធីសិក្សា ACCA ProDipSust មុនដំបូងគេបង្អស់ក្នុងប្រទេសកម្ពុជា ដែលផ្តល់ជូននៅវិទ្យាស្ថានគណនេយ្យធុរកិច្ច (ប៊ី អេស អេ)។',
      'យើងនឹងផ្តល់ជូន៖ 📚 ការរំលឹកមេរៀនត្រៀមប្រឡង ៣ ថ្ងៃ · ✍ សិក្សាផ្ដោតលើខ្លឹមសារសំខាន់ៗរបស់វិញ្ញាបនបត្រ ACCA ទាំង ៤',
      'តើអ្នកបានត្រៀមខ្លួនរួចរាល់ដើម្បីដឹកនាំអនាគតហិរញ្ញវត្ថុហើយឬនៅ?',
      'Learn more: https://www.accaglobal.com/.../professional.../overview.html',
      'Register now: https://forms.gle/WQzqSViZg1maCC1q9',
      'We’re celebrating the 1st Anniversary of launching the ACCA Professional Diploma in Sustainability (ProDipSust)!',
      'Enrol in Cambodia’s first ACCA ProDipSust at the Business School of Accountancy (BSA).',
      'We equip you with: 📚 3-Day Intensive Exam Revision · ✍ 4 ACCA Certificate Review Sessions',
      'Ready to lead the future of finance?'
    ],
    hashtags: ['#bsa', '#ACCASustainability', '#ProDipSust', '#ShapingCambodiaFinanceLeaders']
  },
  {
    icon: 'insights',
    title: 'Faculty insights on exam success',
    description: 'Practical tips, study plans, and resources curated by our experts.',
    tag: 'Insights',
    image: '/insight1.jpg',
    details: [
      'We are expanding! BSA is seeking part-time ACCA FIA tutors. If teaching is your passion and accounting is your expertise, we want you on our team.',
      'Apply now',
      'Email: info@bsa.com.kh',
      'Phone: +855 77 222 909',
      'Location: Business School of Accountancy, Building Connexion, Unit C-18, 2nd Floor, Koh Pich Street, Sangkat Tonle Bassac, Khan Chamkar Mon, Phnom Penh, Cambodia'
    ],
    hashtags: ['#bsa', '#ACCA', '#job', '#opportunity']
  }
];

const iconMap = {
  news: <Newspaper size={32} strokeWidth={1.5} />,
  events: <CalendarDays size={32} strokeWidth={1.5} />,
  insights: <Lightbulb size={32} strokeWidth={1.5} />
};

export default function EventsInsights() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F8FAFC',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0'
      }}
    >
      <div
        className="relative"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(1rem, 4vw, 3rem)',
          paddingRight: 'clamp(1rem, 4vw, 3rem)'
        }}
      >
        <div className="text-center" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <p
            className="font-semibold uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              color: '#1C68B4',
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}
          >
            Events/Insights
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0F172A',
              marginBottom: '0.75rem'
            }}
          >
            Latest News
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#475569',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            Stay up-to-date with the latest news, programmes, and updates.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.25rem, 3vw, 1.75rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white transition-all duration-300"
              style={{
                padding: '1.5rem',
                borderRadius: '0.85rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 8px rgba(15, 23, 42, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(15, 23, 42, 0.05)';
              }}
            >
              {item.image && (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    borderRadius: '0.65rem',
                    overflow: 'hidden',
                    marginBottom: '1rem'
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              )}
              <div className="flex items-center gap-3" style={{ marginBottom: '1rem' }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    backgroundColor: '#EFF6FF',
                    color: '#1C68B4'
                  }}
                >
                  {iconMap[item.icon]}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    color: '#1C68B4',
                    letterSpacing: '0.02em'
                  }}
                >
                  {item.tag}
                </span>
              </div>
              {item.date && (
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    color: '#0F172A',
                    fontWeight: 600,
                    marginTop: '-0.5rem',
                    marginBottom: '0.25rem'
                  }}
                >
                  {item.date}
                </p>
              )}
              <h3
                className="font-semibold"
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '1.2rem',
                  color: '#0F172A',
                  marginBottom: '0.6rem',
                  lineHeight: '1.35'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.98rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  margin: 0,
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere'
                }}
              >
                {item.description}
              </p>
              {item.details && (
                <>
                  <div
                    style={{
                      marginTop: '0.75rem',
                      display: expandedIndex === index ? 'grid' : 'none',
                      gap: '0.5rem'
                    }}
                  >
                    {item.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontSize: '0.98rem',
                          color: '#475569',
                          lineHeight: '1.65',
                          margin: 0,
                          wordBreak: 'break-word',
                          overflowWrap: 'anywhere',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  {item.hashtags && expandedIndex === index && (
                    <div
                      style={{
                        marginTop: '0.85rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem'
                      }}
                    >
                      {item.hashtags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: '#F1F5F9',
                            color: '#1C68B4',
                            fontFamily: 'var(--font-ibm-plex-sans)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            padding: '0.35rem 0.65rem',
                            borderRadius: '9999px'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleExpanded(index)}
                    style={{
                      marginTop: '0.85rem',
                      background: 'transparent',
                      color: '#1C68B4',
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    {expandedIndex === index ? 'See Less' : 'See More'}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#news"
            className="no-underline inline-block transition-all duration-300"
            style={{
              backgroundColor: '#1C68B4',
              color: '#FFFFFF',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '0.9rem 2.6rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 20px rgba(28, 104, 180, 0.18)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#164F99';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1C68B4';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            See All News
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AboutBSA() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(2rem, 4vw, 3rem) 0'
      }}
    >
      <div
        className="relative"
        style={{
          maxWidth: '1100px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1rem, 4vw, 3rem)',
          paddingRight: 'clamp(1rem, 4vw, 3rem)'
        }}
      >
        <div
          className="relative"
          style={{
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#F9FBFF',
            borderRadius: '1.25rem',
            padding: 'clamp(1.75rem, 4vw, 2.75rem)',
            boxShadow: '0 20px 50px rgba(12, 49, 97, 0.08)',
            border: '1px solid #E5E7EB',
            textAlign: 'center',
            transform: 'translateY(-10px)'
          }}
        >
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#1C68B4',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
          >
            The Business School of Accountancy (BSA)
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#374151',
              lineHeight: '1.7',
              display: 'grid',
              gap: '1rem'
            }}
          >
            <p style={{ margin: 0 }}>
              BSA is a premier institution dedicated to delivering high-quality education and training in accounting,
              finance and fintech. With a focus on empowering future finance leaders, BSA blends academic excellence
              with practical industry insights, providing students with the essential tools to succeed in today’s
              dynamic business world.
            </p>
            <p style={{ margin: 0 }}>
              Our innovative curriculum equips individuals with the knowledge, skills and ethical values needed to
              navigate complex financial challenges and drive sustainable growth. We specialise in globally recognised
              qualifications such as ACCA and ACCA FIA, offering exam preparation, mentoring and student support to
              ensure a smooth pathway from foundation studies to professional certification.
            </p>
            <p style={{ margin: 0 }}>
              With a proven track record of student success, experienced lecturers, and strong industry connections, BSA
              prepares graduates to excel in accounting, audit and finance roles locally and globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

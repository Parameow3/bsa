import Hero from '@/components/Hero';
import ACCACertifications from '@/components/ACCACertifications';
import AboutBSA from '@/components/AboutBSA';
import WhyChooseBSA from '@/components/WhyChooseBSA';
import Partners from '@/components/Partners';
import EventsInsights from '@/components/EventsInsights';

export default function Home() {
  return (
    <main className="w-full bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      <Hero />
      <ACCACertifications />
      <AboutBSA />
      <Partners />
      <WhyChooseBSA />
      <EventsInsights />
    </main>
  );
}

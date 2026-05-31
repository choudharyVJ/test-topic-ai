import Navbar from '@/components/layout/Navbar';

import HeroSection from '@/components/hero/HeroSection';

import AIExperienceSection from '@/components/home/AIExperienceSection';

import FooterSection from '@/components/layout/FooterSection';


export default function Home() {

  return (

    <main>

      <Navbar />

      <HeroSection />

      <AIExperienceSection />

      <FooterSection />

    </main>
  );
}
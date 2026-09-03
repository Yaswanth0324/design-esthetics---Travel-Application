import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/hero/HeroSection';
import DestinationGrid from '../components/destinations/DestinationGrid';
import LocationSection from '../components/hero/LocationSection';

export default function HomePage({ scrollTo }) {
  const location = useLocation();

  useEffect(() => {
    const targetId = scrollTo || (location.hash ? location.hash.replace('#', '') : null);
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [scrollTo, location.hash]);

  return (
    <main id="main-content">
      <HeroSection />
      <DestinationGrid />
      <LocationSection />
    </main>
  );
}

import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import DestinationGrid from '../components/destinations/DestinationGrid';
import LocationSection from '../components/hero/LocationSection';

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <DestinationGrid />
      <LocationSection />
    </main>
  );
}

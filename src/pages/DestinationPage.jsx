import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, MapPin, Globe, DollarSign, Clock, Star,
  Calendar, Languages, Thermometer, ChevronDown
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { usePexels } from '../hooks/usePexels';
import WeatherWidget from '../components/weather/WeatherWidget';
import PlaceCard from '../components/places/PlaceCard';
import ChatBot from '../components/chatbot/ChatBot';
import { ErrorState } from '../components/ui/States';
import './DestinationPage.css';

function HeroImage({ destination }) {
  const { photos, loading } = usePexels(`${destination.name} ${destination.country} travel landscape`, 3);
  const photo = photos[0];

  return (
    <div className="dest-page__hero">
      {loading && <div className="dest-page__hero-img skeleton" />}
      {!loading && photo && (
        <>
          <img
            src={photo.url}
            alt={`${destination.name} hero`}
            className="dest-page__hero-img"
          />
          <div className="dest-page__hero-overlay" />
        </>
      )}
      {!loading && !photo && (
        <div
          className="dest-page__hero-img"
          style={{ background: 'linear-gradient(135deg, #0d1321, #1c2a3e)' }}
        />
      )}

      {/* Hero content */}
      <div className="dest-page__hero-content container">
        <Link to="/" className="dest-page__back" aria-label="Back to destinations">
          <ArrowLeft size={18} /> All Destinations
        </Link>
        <div className="dest-page__hero-text">
          <div className="dest-page__hero-location">
            <MapPin size={14} />
            {destination.country} · {destination.continent}
          </div>
          <h1 className="display-xl dest-page__hero-title">{destination.name}</h1>
          <p className="dest-page__hero-tagline">{destination.tagline}</p>
          <div className="dest-page__hero-rating">
            <Star size={16} fill="currentColor" style={{ color: 'var(--accent-gold)' }} />
            <span>{destination.rating}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>· World-class destination</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DestinationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const destination = React.useMemo(() => {
    const found = destinations.find(d => d.id === id);
    if (found) return found;

    const name = (id || '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      id,
      name,
      country: 'Global Explorer',
      continent: 'Worldwide',
      tagline: `Discover ${name} with AI travel guide & live weather`,
      description: `${name} is an exciting destination. Explore live weather conditions, discover notable places, and plan your day-by-day itinerary with our AI assistant.`,
      coordinates: null,
      cityName: name,
      tags: ['culture', 'sightseeing', 'food', 'adventure'],
      bestTime: 'Year-round',
      language: 'Local / English',
      currency: 'Local Currency',
      timezone: 'Local Timezone',
      rating: 4.8,
      famousPlaces: [
        {
          id: `${id}-1`,
          name: `${name} Landmarks & Heritage`,
          description: `Iconic monuments, historical sites, and popular attractions across ${name}.`,
          category: 'Landmark',
          pexelsQuery: `${name} city landmark`,
        },
        {
          id: `${id}-2`,
          name: `${name} Culture & Local Life`,
          description: `Experience the vibrant neighborhood life, local markets, and food scene in ${name}.`,
          category: 'Culture',
          pexelsQuery: `${name} travel culture`,
        },
      ],
    };
  }, [id]);

  const [activeTab, setActiveTab] = useState('overview');
  const tabsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!destination) {
    return (
      <main style={{ paddingTop: '120px' }}>
        <div className="container">
          <ErrorState
            title="Destination not found"
            message="We couldn't find that destination. It might have been removed or the URL is incorrect."
            onRetry={() => navigate('/')}
          />
        </div>
      </main>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'places', label: `Places (${destination.famousPlaces.length})` },
    { id: 'weather', label: 'Weather' },
    { id: 'plan', label: 'AI Trip Planner' },
  ];

  return (
    <main id="main-content">
      {/* Hero */}
      <HeroImage destination={destination} />

      {/* Quick info strip */}
      <div className="dest-page__info-strip">
        <div className="container">
          <div className="dest-page__info-grid">
            {[
              { icon: <Languages size={15} />, label: 'Language', value: destination.language },
              { icon: <DollarSign size={15} />, label: 'Currency', value: destination.currency },
              { icon: <Globe size={15} />, label: 'Timezone', value: destination.timezone },
              { icon: <Calendar size={15} />, label: 'Best Time', value: destination.bestTime },
            ].map(item => (
              <div key={item.label} className="dest-page__info-item">
                <div className="dest-page__info-icon">{item.icon}</div>
                <div>
                  <div className="dest-page__info-label">{item.label}</div>
                  <div className="dest-page__info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="dest-page__tabs-bar" ref={tabsRef}>
        <div className="container">
          <div className="dest-page__tabs" role="tablist" aria-label="Destination sections">
            {tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                className={`dest-page__tab ${activeTab === tab.id ? 'dest-page__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab panels */}
      <div className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-lg)' }}>
        {/* Overview */}
        {activeTab === 'overview' && (
          <div
            id="tabpanel-overview"
            role="tabpanel"
            aria-labelledby="tab-overview"
            className="dest-page__panel"
          >
            <div className="dest-page__overview-layout">
              <div>
                <p className="section-eyebrow">About</p>
                <h2 className="display-md" style={{ marginBottom: 'var(--space-lg)' }}>
                  Discover {destination.name}
                </h2>
                <p className="text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {destination.description}
                </p>

                <div style={{ marginTop: 'var(--space-xl)' }}>
                  <p className="section-eyebrow">Experiences</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'var(--space-md)' }}>
                    {destination.tags.map(tag => (
                      <span key={tag} className="tag active">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Famous places preview */}
                <div style={{ marginTop: 'var(--space-xl)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-lg)' }}>
                    <p className="section-eyebrow">Must-See Places</p>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => setActiveTab('places')}
                      style={{ color: 'var(--accent-teal)' }}
                    >
                      View all →
                    </button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
                    {destination.famousPlaces.slice(0, 2).map((place, i) => (
                      <PlaceCard key={place.id} place={place} index={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="dest-page__overview-sidebar">
                <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  <div>
                    <p className="section-eyebrow" style={{ marginBottom: 'var(--space-md)' }}>Live Weather</p>
                    <WeatherWidget coords={destination.coordinates} />
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, var(--accent-teal-dim), var(--accent-gold-dim))',
                    border: '1px solid rgba(0,212,170,0.2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-lg)',
                  }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-teal)', marginBottom: '8px' }}>✨ AI Travel Guide</p>
                    <p className="text-sm text-muted" style={{ marginBottom: 'var(--space-md)' }}>
                      Ask our AI anything about {destination.name} or generate a full itinerary.
                    </p>
                    <button
                      className="btn btn-primary btn-sm w-full"
                      onClick={() => setActiveTab('plan')}
                    >
                      Open Trip Planner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Places */}
        {activeTab === 'places' && (
          <div
            id="tabpanel-places"
            role="tabpanel"
            aria-labelledby="tab-places"
            className="dest-page__panel"
          >
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <p className="section-eyebrow">Famous Places</p>
              <h2 className="display-md">Must-Visit in {destination.name}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
              {destination.famousPlaces.map((place, i) => (
                <PlaceCard key={place.id} place={place} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Weather */}
        {activeTab === 'weather' && (
          <div
            id="tabpanel-weather"
            role="tabpanel"
            aria-labelledby="tab-weather"
            className="dest-page__panel"
          >
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <p className="section-eyebrow">Live Weather</p>
              <h2 className="display-md">Weather in {destination.name}</h2>
              <p className="text-muted" style={{ marginTop: '8px' }}>
                Real-time conditions and 5-day forecast. You can also search any city.
              </p>
            </div>
            <div style={{ maxWidth: '520px' }}>
              <WeatherWidget coords={destination.coordinates} showSearch />
            </div>
          </div>
        )}

        {/* AI Plan */}
        {activeTab === 'plan' && (
          <div
            id="tabpanel-plan"
            role="tabpanel"
            aria-labelledby="tab-plan"
            className="dest-page__panel"
          >
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <p className="section-eyebrow">AI Trip Planner</p>
              <h2 className="display-md">Plan Your {destination.name} Trip</h2>
              <p className="text-muted" style={{ marginTop: '8px', maxWidth: '520px' }}>
                Chat with our AI guide or generate a complete day-by-day itinerary tailored to your preferences.
              </p>
            </div>
            <div style={{ maxWidth: '720px' }}>
              <ChatBot destination={destination} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

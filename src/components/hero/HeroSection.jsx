import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Play } from 'lucide-react';
import { destinations } from '../../data/destinations';
import './HeroSection.css';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [titleWord, setTitleWord] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const words = ['World.', 'Journey.', 'Adventure.', 'Story.', 'Escape.'];

  // Rotate title words
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleWord(w => (w + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Filter destinations
  useEffect(() => {
    if (query.length < 1) { setSuggestions([]); return; }
    const q = query.toLowerCase().trim();
    const matches = destinations.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.continent.toLowerCase().includes(q)
    ).slice(0, 5);

    if (matches.length === 0 && q.length >= 2) {
      const slug = q.replace(/\s+/g, '-');
      const formatted = q.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      setSuggestions([{
        id: slug,
        name: formatted,
        country: 'Global Destination',
        continent: 'AI & Live Weather',
        isDynamic: true,
      }]);
    } else {
      setSuggestions(matches);
    }
  }, [query]);

  const handleSelect = (dest) => {
    navigate(`/destination/${dest.id}`);
    setShowSuggestions(false);
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    } else if (query.trim().length >= 2) {
      const slug = query.trim().toLowerCase().replace(/\s+/g, '-');
      navigate(`/destination/${slug}`);
      setShowSuggestions(false);
      setQuery('');
    }
  };

  return (
    <section className="hero" aria-label="Hero section">
      {/* Background video */}
      <div className="hero__video-wrapper">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__eyebrow animate-fadeIn">
          <span className="hero__dot" /> Explore the World with Wander
        </div>

        <h1 className="hero__title display-xl animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          Your Next{' '}
          <span className="hero__rotating-word text-gradient">
            {words[titleWord]}
          </span>
        </h1>

        <p className="hero__subtitle text-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Discover breathtaking destinations, get live weather, explore iconic landmarks, 
          and plan your perfect trip with AI assistance.
        </p>

        {/* Search */}
        <div className="hero__search-wrapper animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <form className="hero__search" onSubmit={handleSubmit} role="search" aria-label="Destination search">
            <Search size={20} className="hero__search-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              className="hero__search-input"
              placeholder="Search Tokyo, Paris, Bali…"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              aria-label="Search destinations"
              aria-autocomplete="list"
              aria-expanded={showSuggestions && suggestions.length > 0}
            />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)', padding: '12px 28px' }}>
              Explore
            </button>
          </form>

          {/* Autocomplete */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="hero__suggestions" role="listbox" aria-label="Search suggestions">
              {suggestions.map(dest => (
                <li
                  key={dest.id}
                  className="hero__suggestion-item"
                  role="option"
                  onClick={() => handleSelect(dest)}
                  onKeyDown={e => e.key === 'Enter' && handleSelect(dest)}
                  tabIndex={0}
                >
                  <div className="hero__suggestion-icon">✈️</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{dest.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{dest.country} · {dest.continent}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          {[
            { num: `${destinations.length}`, label: 'Destinations' },
            { num: 'Live', label: 'Weather' },
            { num: 'AI', label: 'Trip Planner' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#destinations" className="hero__scroll" aria-label="Scroll to destinations">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

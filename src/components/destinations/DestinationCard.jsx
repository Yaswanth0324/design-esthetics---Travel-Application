import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { usePexels } from '../../hooks/usePexels';
import { SkeletonCard } from '../ui/States';
import './DestinationCard.css';

function DestinationImage({ destination }) {
  const { photos, loading } = usePexels(`${destination.name} ${destination.country} travel`, 1);
  const photo = photos[0];

  if (loading) {
    return <div className="dest-card__image-wrapper skeleton" />;
  }

  if (photo) {
    return (
      <div className="dest-card__image-wrapper">
        <img
          src={photo.medium}
          alt={`${destination.name}, ${destination.country}`}
          className="dest-card__image"
          loading="lazy"
        />
        <div className="dest-card__image-overlay" />
      </div>
    );
  }

  // Fallback gradient
  const gradients = [
    'linear-gradient(135deg, #0d4f3c, #00d4aa)',
    'linear-gradient(135deg, #1a0533, #8b5cf6)',
    'linear-gradient(135deg, #2d1b00, #f59e0b)',
    'linear-gradient(135deg, #0d1f4f, #3b82f6)',
    'linear-gradient(135deg, #4f0d0d, #f97316)',
  ];
  const grad = gradients[destination.name.charCodeAt(0) % gradients.length];

  return (
    <div className="dest-card__image-wrapper" style={{ background: grad }}>
      <div className="dest-card__fallback-text">{destination.name[0]}</div>
      <div className="dest-card__image-overlay" />
    </div>
  );
}

export default function DestinationCard({ destination, index = 0 }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => navigate(`/destination/${destination.id}`);

  return (
    <article
      ref={cardRef}
      className={`dest-card reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 0.08, 0.5)}s` }}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${destination.name}, ${destination.country}`}
    >
      <DestinationImage destination={destination} />

      <div className="dest-card__body">
        <div className="dest-card__top">
          <div>
            <div className="dest-card__location">
              <MapPin size={12} aria-hidden="true" />
              {destination.country} · {destination.continent}
            </div>
            <h2 className="dest-card__name">{destination.name}</h2>
          </div>
          <div className="dest-card__rating" aria-label={`Rated ${destination.rating} out of 5`}>
            <Star size={13} fill="currentColor" aria-hidden="true" />
            {destination.rating}
          </div>
        </div>

        <p className="dest-card__tagline">{destination.tagline}</p>

        <div className="dest-card__tags">
          {destination.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="dest-card__footer">
          <div className="dest-card__best-time">
            <Clock size={12} aria-hidden="true" />
            Best: {destination.bestTime}
          </div>
          <button className="dest-card__cta" aria-label={`Explore ${destination.name}`} tabIndex={-1}>
            Explore <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

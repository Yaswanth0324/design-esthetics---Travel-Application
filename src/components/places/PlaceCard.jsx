import React, { useState } from 'react';
import { MapPin, Camera } from 'lucide-react';
import { usePexels } from '../../hooks/usePexels';
import './PlaceCard.css';

const categoryColors = {
  Temple: { bg: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' },
  Shrine: { bg: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' },
  Museum: { bg: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' },
  Park: { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
  Beach: { bg: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' },
  Mountain: { bg: 'rgba(156, 163, 175, 0.15)', color: '#9ca3af' },
  Landmark: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
  Monument: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
  Palace: { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316' },
  District: { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316' },
  Village: { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316' },
  Nature: { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
  Art: { bg: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' },
  Archaeological: { bg: 'rgba(180, 83, 9, 0.15)', color: '#b45309' },
  Diving: { bg: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' },
};

const categoryIcons = {
  Temple: '🕌',
  Shrine: '⛩️',
  Museum: '🏛️',
  Park: '🌳',
  Beach: '🏖️',
  Mountain: '🏔️',
  Landmark: '📍',
  Monument: '🗿',
  Palace: '🏰',
  District: '🏙️',
  Village: '🏡',
  Nature: '🌿',
  Art: '🎨',
  Archaeological: '🏺',
  Diving: '🤿',
};

function PlaceImage({ place }) {
  const { photos, loading } = usePexels(place.pexelsQuery, 1);
  const [imgError, setImgError] = useState(false);
  const photo = photos[0];

  if (loading) {
    return <div className="place-card__image skeleton" />;
  }

  if (photo && !imgError) {
    return (
      <div className="place-card__image-wrapper">
        <img
          src={photo.medium}
          alt={place.name}
          className="place-card__image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
        <div className="place-card__image-overlay" />
        {photo.photographer && (
          <div className="place-card__photo-credit">
            <Camera size={10} />
            {photo.photographer}
          </div>
        )}
      </div>
    );
  }

  const colors = categoryColors[place.category] || { bg: 'rgba(0,212,170,0.15)', color: '#00d4aa' };
  const icon = categoryIcons[place.category] || '✨';
  
  // High quality Unsplash placeholder URL based on search query or category
  const fallbackImgUrl = `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80`;

  return (
    <div className="place-card__image-wrapper place-card__image--fallback" style={{ background: colors.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: '2.8rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>{icon}</span>
      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: colors.color, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{place.category}</span>
    </div>
  );
}

export default function PlaceCard({ place, index = 0 }) {
  const colors = categoryColors[place.category] || { bg: 'rgba(0,212,170,0.15)', color: '#00d4aa' };

  return (
    <article
      className="place-card reveal"
      style={{ transitionDelay: `${Math.min(index * 0.1, 0.5)}s` }}
    >
      <PlaceImage place={place} />

      <div className="place-card__body">
        <div
          className="place-card__category"
          style={{ background: colors.bg, color: colors.color }}
        >
          {place.category}
        </div>
        <h3 className="place-card__name">{place.name}</h3>
        <p className="place-card__description">{place.description}</p>
      </div>
    </article>
  );
}

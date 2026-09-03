import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { destinations, continents, allTags } from '../../data/destinations';
import DestinationCard from './DestinationCard';
import { SkeletonCard, EmptyState } from '../ui/States';
import './DestinationGrid.css';

export default function DestinationGrid() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeContinent, setActiveContinent] = useState('All');
  const [activeTags, setActiveTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearch('');
    setActiveContinent('All');
    setActiveTags([]);
  };

  const filtered = useMemo(() => {
    return destinations.filter(d => {
      const q = search.toLowerCase();
      const matchSearch = !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.tags.some(t => t.includes(q));
      const matchContinent = activeContinent === 'All' || d.continent === activeContinent;
      const matchTags = activeTags.length === 0 || activeTags.every(t => d.tags.includes(t));
      return matchSearch && matchContinent && matchTags;
    });
  }, [search, activeContinent, activeTags]);

  const hasActiveFilters = search || activeContinent !== 'All' || activeTags.length > 0;

  return (
    <section id="destinations" className="section">
      <div className="container">
        {/* Header */}
        <div className="dest-grid__header reveal">
          <div>
            <p className="section-eyebrow">Destinations</p>
            <h2 className="display-md">Explore the World</h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '400px', fontSize: '0.95rem', marginTop: '8px' }}>
            {filtered.length} destination{filtered.length !== 1 ? 's' : ''} to discover
          </p>
        </div>

        {/* Controls */}
        <div className="dest-grid__controls reveal">
          {/* Search */}
          <div className="dest-grid__search">
            <Search size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
            <input
              type="search"
              className="dest-grid__search-input"
              placeholder="Filter destinations…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Filter destinations by name, country, or tag"
            />
            {search && (
              <button onClick={() => setSearch('')} className="dest-grid__clear" aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <button
            className={`btn btn-secondary btn-sm ${showFilters ? 'active-filter-btn' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            aria-controls="filter-panel"
          >
            <SlidersHorizontal size={15} />
            Filters
            {hasActiveFilters && <span className="filter-dot" />}
          </button>

          {hasActiveFilters && (
            <button className="btn btn-ghost btn-sm" onClick={clearFilters}>
              <X size={14} /> Clear all
            </button>
          )}
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div id="filter-panel" className="dest-grid__filters reveal">
            {/* Continents */}
            <div className="dest-grid__filter-group">
              <span className="dest-grid__filter-label">Continent</span>
              <div className="dest-grid__filter-options">
                {continents.map(c => (
                  <button
                    key={c}
                    className={`tag ${activeContinent === c ? 'active' : ''}`}
                    onClick={() => setActiveContinent(c)}
                    aria-pressed={activeContinent === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="dest-grid__filter-group">
              <span className="dest-grid__filter-label">Experiences</span>
              <div className="dest-grid__filter-options">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`tag ${activeTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                    aria-pressed={activeTags.includes(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <EmptyState
            icon="🌐"
            title={search ? `Explore "${search}" with AI` : 'No destinations found'}
            message={search ? `"${search}" isn't in our featured list, but our AI assistant and live weather engine can guide you there!` : 'Try adjusting your filters to discover more places.'}
            action={
              search ? {
                label: `Explore ${search} →`,
                onClick: () => navigate(`/destination/${search.toLowerCase().trim().replace(/\s+/g, '-')}`)
              } : {
                label: 'Clear filters',
                onClick: clearFilters
              }
            }
          />
        ) : (
          <div className="dest-grid__cards">
            {filtered.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

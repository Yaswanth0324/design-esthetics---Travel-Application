import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Search, AlertCircle, Loader2, X } from 'lucide-react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useWeather } from '../../hooks/useWeather';
import { fetchWeatherByCity, searchCities } from '../../services/weatherService';
import WeatherWidget from '../weather/WeatherWidget';
import './LocationSection.css';

export default function LocationSection() {
  const geo = useGeolocation();
  const { data: geoWeather, loading: geoWeatherLoading } = useWeather(geo.coords);

  const [citySearch, setCitySearch] = useState('');
  const [cityResults, setCityResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const [cityWeatherLoading, setCityWeatherLoading] = useState(false);
  const [cityWeatherError, setCityWeatherError] = useState(null);
  const debounceRef = React.useRef(null);

  const handleCityInput = async (e) => {
    const q = e.target.value;
    setCitySearch(q);
    clearTimeout(debounceRef.current);
    if (!q || q.length < 2) { setCityResults([]); return; }
    debounceRef.current = setTimeout(async () => {
      setSearching(true);
      const results = await searchCities(q);
      setCityResults(results);
      setSearching(false);
      setShowDropdown(true);
    }, 400);
  };

  const selectCity = async (city) => {
    setShowDropdown(false);
    setCitySearch(city.display);
    setSelectedCity(city);
    setCityWeatherLoading(true);
    setCityWeatherError(null);
    try {
      const result = await fetchWeatherByCity(city.name);
      setCityWeather(result.weather);
    } catch (err) {
      setCityWeatherError(err.message);
    } finally {
      setCityWeatherLoading(false);
    }
  };

  const clearCitySearch = () => {
    setCitySearch('');
    setCityResults([]);
    setSelectedCity(null);
    setCityWeather(null);
  };

  const displayWeather = cityWeather || geoWeather;
  const displayCoords = selectedCity ? { lat: selectedCity.lat, lon: selectedCity.lon } : geo.coords;
  const displayLoading = cityWeatherLoading || (geo.status === 'loading') || geoWeatherLoading;

  return (
    <section id="location" className="section" aria-labelledby="location-heading">
      <div className="container">
        <div className="location__header reveal">
          <p className="section-eyebrow">Location Awareness</p>
          <h2 id="location-heading" className="display-md">Weather Near You</h2>
          <p className="text-muted" style={{ marginTop: '8px', maxWidth: '480px' }}>
            Share your location for local weather, or search any city worldwide.
          </p>
        </div>

        <div className="location__layout reveal">
          {/* Left: Controls */}
          <div className="location__controls">
            {/* Geolocation card */}
            <div className="location__geo-card">
              <div className="location__geo-icon">
                <Navigation size={22} />
              </div>
              <div className="location__geo-content">
                <h3 className="location__geo-title">Use My Location</h3>
                {geo.status === 'idle' && (
                  <>
                    <p className="text-sm text-muted">Click to share your current location for live weather.</p>
                    <button className="btn btn-primary btn-sm" onClick={geo.request} style={{ marginTop: '12px' }}>
                      <Navigation size={14} /> Detect Location
                    </button>
                  </>
                )}
                {geo.status === 'loading' && (
                  <div className="flex items-center gap-sm" style={{ marginTop: '8px' }}>
                    <div className="spinner spinner-sm" />
                    <span className="text-sm text-muted">Detecting your location…</span>
                  </div>
                )}
                {geo.status === 'granted' && geoWeather && (
                  <p className="text-sm" style={{ color: 'var(--accent-teal)', marginTop: '4px' }}>
                    ✓ Showing weather for {geoWeather.city}, {geoWeather.country}
                  </p>
                )}
                {geo.status === 'denied' && (
                  <div className="location__error">
                    <AlertCircle size={14} />
                    <span className="text-sm">{geo.error} Use the search below instead.</span>
                  </div>
                )}
                {geo.status === 'unavailable' && (
                  <div className="location__error">
                    <AlertCircle size={14} />
                    <span className="text-sm">Geolocation not supported. Use the search below.</span>
                  </div>
                )}
              </div>
            </div>

            {/* City search */}
            <div className="location__search-card">
              <h3 className="location__search-title">
                <Search size={16} /> Search Any City
              </h3>
              <div className="location__search-wrapper">
                <div className="location__search-input-row">
                  <Search size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  <input
                    type="search"
                    className="location__search-input"
                    placeholder="e.g. London, Tokyo, Mumbai…"
                    value={citySearch}
                    onChange={handleCityInput}
                    onFocus={() => cityResults.length && setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    aria-label="Search city for weather"
                  />
                  {searching && <div className="spinner spinner-sm" />}
                  {citySearch && !searching && (
                    <button onClick={clearCitySearch} style={{ color: 'var(--text-muted)', display: 'flex' }} aria-label="Clear search">
                      <X size={14} />
                    </button>
                  )}
                </div>

                {showDropdown && cityResults.length > 0 && (
                  <ul className="location__dropdown" role="listbox">
                    {cityResults.map((city, i) => (
                      <li
                        key={i}
                        className="location__dropdown-item"
                        role="option"
                        onClick={() => selectCity(city)}
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && selectCity(city)}
                      >
                        <MapPin size={12} />
                        {city.display}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right: Weather */}
          <div className="location__weather">
            {displayLoading && (
              <div className="location__weather-loading">
                <div className="spinner" />
                <p className="text-sm text-muted">Loading weather…</p>
              </div>
            )}

            {!displayLoading && displayWeather && (
              <WeatherWidget coords={displayCoords} />
            )}

            {!displayLoading && !displayWeather && geo.status === 'idle' && !selectedCity && (
              <div className="location__weather-placeholder">
                <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)', animation: 'float 4s ease-in-out infinite' }}>🌍</div>
                <p className="text-muted text-sm">Share your location or search a city to see live weather</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

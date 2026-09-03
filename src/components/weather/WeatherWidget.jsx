import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Wind, Droplets, Eye, Thermometer, Sunrise, Sunset,
  RefreshCw, MapPin, AlertCircle
} from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';
import { fetchWeatherByCity, searchCities } from '../../services/weatherService';
import { LoadingSpinner, ErrorState } from '../ui/States';
import './WeatherWidget.css';

function getWeatherEmoji(iconCode) {
  const code = Math.floor(iconCode / 100);
  if (iconCode >= 200 && iconCode < 300) return '⛈️';
  if (iconCode >= 300 && iconCode < 400) return '🌦️';
  if (iconCode >= 500 && iconCode < 600) return '🌧️';
  if (iconCode >= 600 && iconCode < 700) return '❄️';
  if (iconCode >= 700 && iconCode < 800) return '🌫️';
  if (iconCode === 800) return '☀️';
  if (iconCode === 801) return '🌤️';
  if (iconCode === 802) return '⛅';
  return '☁️';
}

function formatTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDay(dateStr) {
  return new Date(dateStr).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}

export default function WeatherWidget({ coords, cityName, showSearch = false }) {
  const { data, loading, error } = useWeather(coords);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searching, setSearching] = useState(false);
  const [customWeather, setCustomWeather] = useState(null);
  const [customLoading, setCustomLoading] = useState(false);
  const [customError, setCustomError] = useState(null);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!coords?.lat && cityName) {
      let cancelled = false;
      setCustomLoading(true);
      fetchWeatherByCity(cityName)
        .then(res => { if (!cancelled) setCustomWeather(res.weather); })
        .catch(err => { if (!cancelled) setCustomError(err.message); })
        .finally(() => { if (!cancelled) setCustomLoading(false); });
      return () => { cancelled = true; };
    }
  }, [coords?.lat, cityName]);

  const weather = customWeather || data;
  const isLoading = customLoading || (loading && !customWeather);
  const displayError = customError || error;

  const handleSearch = useCallback(async (q) => {
    if (!q || q.length < 2) { setSearchResults([]); return; }
    setSearching(true);
    const results = await searchCities(q);
    setSearchResults(results);
    setSearching(false);
    setShowDropdown(true);
  }, []);

  const onSearchInput = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => handleSearch(q), 400);
  };

  const selectCity = async (city) => {
    setShowDropdown(false);
    setSearchQuery(city.display);
    setCustomLoading(true);
    setCustomError(null);
    try {
      const result = await fetchWeatherByCity(city.name);
      setCustomWeather(result.weather);
    } catch (err) {
      setCustomError(err.message);
    } finally {
      setCustomLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="weather-widget weather-widget--loading">
        <LoadingSpinner center />
        <p className="text-sm text-muted" style={{ textAlign: 'center', marginTop: '8px' }}>Fetching live weather…</p>
      </div>
    );
  }

  if (displayError && !weather) {
    return (
      <div className="weather-widget">
        <ErrorState
          title="Weather unavailable"
          message={displayError}
        />
      </div>
    );
  }

  return (
    <div className="weather-widget">
      {/* Search bar */}
      {showSearch && (
        <div className="weather-search" ref={searchRef}>
          <div className="weather-search__input-row">
            <MapPin size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            <input
              type="search"
              className="weather-search__input"
              placeholder="Search any city…"
              value={searchQuery}
              onChange={onSearchInput}
              onFocus={() => searchResults.length && setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              aria-label="Search city for weather"
            />
            {searching && <div className="spinner spinner-sm" />}
          </div>

          {showDropdown && searchResults.length > 0 && (
            <ul className="weather-search__dropdown" role="listbox">
              {searchResults.map((city, i) => (
                <li
                  key={i}
                  className="weather-search__option"
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
      )}

      {weather && (
        <>
          {/* Main weather */}
          <div className="weather-main">
            <div className="weather-main__left">
              <div className="weather-emoji">{getWeatherEmoji(weather.iconCode)}</div>
              <div>
                <div className="weather-temp">{weather.temp}°<span>C</span></div>
                <div className="weather-desc">{weather.description}</div>
                <div className="weather-location">
                  <MapPin size={12} />
                  {weather.city}, {weather.country}
                </div>
              </div>
            </div>
            <div className="weather-main__right">
              <div className="weather-feels">
                Feels like <strong>{weather.feelsLike}°C</strong>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="weather-stats">
            {[
              { icon: <Droplets size={14} />, label: 'Humidity', value: `${weather.humidity}%` },
              { icon: <Wind size={14} />, label: 'Wind', value: `${weather.windSpeed} km/h` },
              { icon: <Eye size={14} />, label: 'Visibility', value: `${weather.visibility} km` },
            ].map(s => (
              <div key={s.label} className="weather-stat">
                <div className="weather-stat__icon">{s.icon}</div>
                <div className="weather-stat__label">{s.label}</div>
                <div className="weather-stat__value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Sunrise / Sunset */}
          {weather.sunrise && (
            <div className="weather-sun">
              <div className="weather-sun__item">
                <Sunrise size={14} style={{ color: '#fbbf24' }} />
                <span>Sunrise {formatTime(weather.sunrise)}</span>
              </div>
              <div className="weather-sun__item">
                <Sunset size={14} style={{ color: '#f97316' }} />
                <span>Sunset {formatTime(weather.sunset)}</span>
              </div>
            </div>
          )}

          {/* 5-day forecast */}
          {weather.forecast?.length > 0 && (
            <div className="weather-forecast">
              <div className="weather-forecast__label">5-day forecast</div>
              <div className="weather-forecast__days">
                {weather.forecast.map(day => (
                  <div key={day.date} className="weather-forecast__day">
                    <div className="weather-forecast__dow">{new Date(day.date + 'T12:00:00').toLocaleDateString([], { weekday: 'short' })}</div>
                    <div className="weather-forecast__icon">{getWeatherEmoji(parseInt(day.icon) || 800)}</div>
                    <div className="weather-forecast__range">
                      <span className="weather-forecast__max">{day.max}°</span>
                      <span className="weather-forecast__min">{day.min}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

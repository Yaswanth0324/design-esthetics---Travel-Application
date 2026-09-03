import { useState, useEffect } from 'react';
import { fetchWeatherByCoords } from '../services/weatherService';

export function useWeather(coords) {
  const [state, setState] = useState({ data: null, loading: false, error: null });

  useEffect(() => {
    if (!coords?.lat || !coords?.lon) return;

    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    fetchWeatherByCoords(coords.lat, coords.lon)
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch(err => {
        if (!cancelled) setState({ data: null, loading: false, error: err.message });
      });

    return () => { cancelled = true; };
  }, [coords?.lat, coords?.lon]);

  return state;
}

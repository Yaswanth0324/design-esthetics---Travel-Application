import { useState, useEffect, useCallback } from 'react';

export function useGeolocation() {
  const [state, setState] = useState({
    status: 'idle', // idle | loading | granted | denied | unavailable
    coords: null,
    error: null,
  });

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ status: 'unavailable', coords: null, error: 'Geolocation is not supported by your browser.' });
      return;
    }

    setState(s => ({ ...s, status: 'loading' }));

    navigator.geolocation.getCurrentPosition(
      position => {
        setState({
          status: 'granted',
          coords: { lat: position.coords.latitude, lon: position.coords.longitude },
          error: null,
        });
      },
      err => {
        const msg =
          err.code === 1
            ? 'Location access was denied.'
            : err.code === 2
            ? 'Location is currently unavailable.'
            : 'Location request timed out.';
        setState({ status: 'denied', coords: null, error: msg });
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  }, []);

  return { ...state, request };
}

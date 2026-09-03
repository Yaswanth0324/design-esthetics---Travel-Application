import { useState, useEffect } from 'react';
import { searchPhotos } from '../services/pexelsService';

export function usePexels(query, perPage = 1, enabled = true) {
  const [state, setState] = useState({ photos: [], loading: false, error: null });

  useEffect(() => {
    if (!query || !enabled) return;

    let cancelled = false;
    setState({ photos: [], loading: true, error: null });

    searchPhotos(query, perPage)
      .then(photos => {
        if (!cancelled) setState({ photos, loading: false, error: null });
      })
      .catch(err => {
        if (!cancelled) setState({ photos: [], loading: false, error: err.message });
      });

    return () => { cancelled = true; };
  }, [query, perPage, enabled]);

  return state;
}

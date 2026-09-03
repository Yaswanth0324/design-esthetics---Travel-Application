const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

const cache = new Map();

export async function searchPhotos(query, perPage = 1) {
  const cacheKey = `${query}-${perPage}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const res = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      { headers: { Authorization: API_KEY } }
    );
    if (!res.ok) throw new Error('Pexels fetch failed');
    const data = await res.json();
    const photos = data.photos.map(p => ({
      id: p.id,
      url: p.src.large2x,
      medium: p.src.large,
      small: p.src.medium,
      alt: p.alt || query,
      photographer: p.photographer,
      photographerUrl: p.photographer_url,
    }));
    cache.set(cacheKey, photos);
    return photos;
  } catch (err) {
    console.error('Pexels error:', err);
    return [];
  }
}

export async function getDestinationPhoto(destinationName) {
  const photos = await searchPhotos(`${destinationName} travel landscape`, 3);
  return photos[0] || null;
}

export async function getPlacePhoto(pexelsQuery) {
  const photos = await searchPhotos(pexelsQuery, 1);
  return photos[0] || null;
}

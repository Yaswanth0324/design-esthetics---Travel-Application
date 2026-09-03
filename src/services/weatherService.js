const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

export async function fetchWeatherByCoords(lat, lon) {
  const [current, forecast] = await Promise.all([
    fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(r => {
      if (!r.ok) throw new Error('Weather fetch failed');
      return r.json();
    }),
    fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40`).then(r => {
      if (!r.ok) throw new Error('Forecast fetch failed');
      return r.json();
    }),
  ]);

  const dailyForecast = [];
  const seen = new Set();
  for (const item of forecast.list) {
    const date = item.dt_txt.split(' ')[0];
    if (!seen.has(date) && dailyForecast.length < 5) {
      seen.add(date);
      dailyForecast.push({
        date,
        temp: Math.round(item.main.temp),
        min: Math.round(item.main.temp_min),
        max: Math.round(item.main.temp_max),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      });
    }
  }

  return {
    city: current.name,
    country: current.sys.country,
    temp: Math.round(current.main.temp),
    feelsLike: Math.round(current.main.feels_like),
    humidity: current.main.humidity,
    windSpeed: Math.round(current.wind.speed * 3.6), // m/s to km/h
    visibility: current.visibility ? (current.visibility / 1000).toFixed(1) : 'N/A',
    description: current.weather[0].description,
    icon: current.weather[0].icon,
    iconCode: current.weather[0].id,
    sunrise: current.sys.sunrise,
    sunset: current.sys.sunset,
    forecast: dailyForecast,
  };
}

export async function fetchWeatherByCity(cityName) {
  const geoRes = await fetch(
    `${GEO_URL}/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${API_KEY}`
  );
  if (!geoRes.ok) throw new Error('Geocoding failed');
  const geoData = await geoRes.json();
  if (!geoData.length) throw new Error(`City "${cityName}" not found`);
  const { lat, lon } = geoData[0];
  return { weather: await fetchWeatherByCoords(lat, lon), coords: { lat, lon } };
}

const COUNTRY_CAPITALS = {
  england: { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278, display: 'London, England, GB' },
  uk: { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278, display: 'London, England, GB' },
  'united kingdom': { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278, display: 'London, England, GB' },
  britain: { name: 'London', country: 'GB', state: 'England', lat: 51.5074, lon: -0.1278, display: 'London, England, GB' },
  japan: { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503, display: 'Tokyo, JP' },
  france: { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522, display: 'Paris, FR' },
  usa: { name: 'New York', country: 'US', state: 'New York', lat: 40.7128, lon: -74.006, display: 'New York, NY, US' },
  'united states': { name: 'New York', country: 'US', state: 'New York', lat: 40.7128, lon: -74.006, display: 'New York, NY, US' },
  greece: { name: 'Santorini', country: 'GR', lat: 36.3932, lon: 25.4615, display: 'Santorini, GR' },
  uae: { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708, display: 'Dubai, AE' },
  peru: { name: 'Machu Picchu', country: 'PE', lat: -13.1631, lon: -72.545, display: 'Machu Picchu, PE' },
  'south africa': { name: 'Cape Town', country: 'ZA', lat: -33.9249, lon: 18.4241, display: 'Cape Town, ZA' },
  iceland: { name: 'Reykjavik', country: 'IS', lat: 64.1466, lon: -21.9426, display: 'Reykjavik, IS' },
  spain: { name: 'Barcelona', country: 'ES', lat: 41.3851, lon: 2.1734, display: 'Barcelona, ES' },
};

export async function searchCities(query) {
  if (!query || query.length < 2) return [];
  const qLower = query.toLowerCase().trim();

  const extraResults = [];
  if (COUNTRY_CAPITALS[qLower]) {
    extraResults.push(COUNTRY_CAPITALS[qLower]);
  }

  const res = await fetch(
    `${GEO_URL}/direct?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`
  );
  if (!res.ok) return extraResults;
  const data = await res.json();
  const apiResults = data.map(c => ({
    name: c.name,
    country: c.country,
    state: c.state,
    lat: c.lat,
    lon: c.lon,
    display: [c.name, c.state, c.country].filter(Boolean).join(', '),
  }));

  // Merge extra mapped results with API results, avoiding duplicate coordinates
  const combined = [...extraResults];
  for (const item of apiResults) {
    if (!combined.some(c => Math.abs(c.lat - item.lat) < 0.05 && Math.abs(c.lon - item.lon) < 0.05)) {
      combined.push(item);
    }
  }

  return combined;
}

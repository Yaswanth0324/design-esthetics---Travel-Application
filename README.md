# Wander — Travel Application

A modern, design-led React web application for exploring world destinations, real-time weather monitoring, landmark discovery, and AI-powered trip itinerary planning. Built for Front-End Developer Assignment.

---

## 🚀 Features

1. **Landing Experience**: Hero section with a looping background video, rotating editorial typography, and live destination search with autocomplete.
2. **Destination Explorer**: Grid browsing for 12 world-class destinations with search, continent filtering (Asia, Europe, Americas, Africa), and tag filtering (culture, food, beaches, temples, etc.).
3. **Famous Places**: Rich card views showcasing iconic landmarks per destination with category badges, detailed descriptions, and Pexels photographer attributions.
4. **Real-time Weather**: Integrated OpenWeather API displaying current temperatures, conditions, humidity, wind speeds, visibility, sunrise/sunset times, and 5-day forecasts. Includes city search autocomplete.
5. **Location Awareness**: Browser Geolocation API integration to detect the user's location and display local weather with fallbacks for denied or unsupported states.
6. **Dynamic Image Sourcing**: High-resolution landscape photo fetching via Pexels API with caching and fallback gradients.
7. **AI Chatbot**: Google Gemini API powered conversational guide context-aware for each destination.
8. **Itinerary Planning**: Structured day-by-day itinerary generation rendered into a clean, readable day-by-day timeline view with activity tags, meal suggestions, budget estimates, and travel tips.

---

## 🛠️ Tech Stack & Services

- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Vanilla CSS with CSS Variables & Glassmorphism design tokens
- **Icons**: Lucide React
- **Weather API**: OpenWeather (`api.openweathermap.org`)
- **AI Model**: Google Gemini 1.5 Flash (`generativelanguage.googleapis.com`)
- **Images**: Pexels API (`api.pexels.com`)

---

## ⚙️ Setup & Local Development

1. Clone repository:
   ```bash
   git clone <repo-url>
   cd "travel applications"
   ```

2. Environment variables setup:
   Copy `.env.example` to `.env` and fill in your keys:
   ```env
   VITE_OPENWEATHER_API_KEY=your_key_here
   VITE_GEMINI_API_KEY=your_key_here
   VITE_PEXELS_API_KEY=your_key_here
   ```

3. Install dependencies and start server:
   ```bash
   npm install
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

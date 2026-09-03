import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import './styles/index.css';

function NotFound() {
  return (
    <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '5rem', marginBottom: '24px', animation: 'float 4s ease-in-out infinite' }}>🗺️</div>
      <h1 className="display-md" style={{ marginBottom: '16px' }}>Page Not Found</h1>
      <p className="text-muted" style={{ marginBottom: '32px' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Back to Home</a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link" style={{
        position: 'fixed', top: '-100px', left: '16px', zIndex: 9999,
        background: 'var(--accent-teal)', color: '#000', padding: '8px 16px',
        borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '0.875rem',
        transition: 'top var(--transition-fast)',
      }}
        onFocus={e => e.target.style.top = '16px'}
        onBlur={e => e.target.style.top = '-100px'}
      >
        Skip to content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/near-me" element={<HomePage scrollTo="location" />} />
        <Route path="/destinations" element={<HomePage scrollTo="destinations" />} />
        <Route path="/destination/:id" element={<DestinationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

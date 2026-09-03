import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-secondary)',
      padding: 'var(--space-lg) 0 var(--space-md)',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-2xl)', marginBottom: 'var(--space-2xl)' }} className="footer-grid">
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, var(--accent-teal), #00b894)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000'
              }}>
                <Compass size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700 }}>Wander</span>
            </Link>
            <p className="text-sm text-muted" style={{ lineHeight: 1.7, maxWidth: '260px' }}>
              Discover the world's most beautiful destinations, plan your perfect trip, and travel with confidence.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Explore</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Asia', 'Europe', 'North America', 'South America', 'Africa'].map(c => (
                <li key={c}>
                  <a href="/#destinations" className="text-sm" style={{ color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-teal)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{c}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>Powered By</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'OpenWeather', url: 'https://openweathermap.org' },
                { name: 'Google Gemini AI', url: 'https://ai.google.dev' },
                { name: 'Pexels', url: 'https://pexels.com' },
              ].map(item => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm"
                    style={{ color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-teal)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <p className="text-xs text-muted">© 2026 Wander. Built with ♥ for the world's travellers.</p>
          <p className="text-xs text-muted">Photos by <a href="https://pexels.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-teal)' }}>Pexels</a> · Weather by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-teal)' }}>OpenWeather</a></p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: var(--space-xl) !important; }
        }
      `}</style>
    </footer>
  );
}

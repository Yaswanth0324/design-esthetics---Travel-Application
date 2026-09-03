import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Compass } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSectionClick = (id) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="navbar__inner" aria-label="Main navigation">
          <Link to="/" className="navbar__brand" aria-label="Wander home">
            <div className="navbar__logo">
              <Compass size={22} strokeWidth={2} />
            </div>
            <span className="navbar__wordmark">Wander</span>
          </Link>

          <ul className="navbar__links" role="list">
            <li>
              <Link to="/" className={`navbar__link ${location.pathname === '/' && !location.hash ? 'navbar__link--active' : ''}`}>
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/#destinations"
                onClick={() => handleSectionClick('destinations')}
                className={`navbar__link ${location.hash === '#destinations' || location.pathname === '/destinations' ? 'navbar__link--active' : ''}`}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/#location"
                onClick={() => handleSectionClick('location')}
                className={`navbar__link ${location.hash === '#location' || location.pathname === '/near-me' ? 'navbar__link--active' : ''}`}
              >
                Near Me
              </Link>
            </li>
          </ul>

          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} role="dialog" aria-label="Mobile menu">
        <ul role="list">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="navbar__mobile-link">Explore</Link></li>
          <li><Link to="/#destinations" onClick={() => handleSectionClick('destinations')} className="navbar__mobile-link">Destinations</Link></li>
          <li><Link to="/#location" onClick={() => handleSectionClick('location')} className="navbar__mobile-link">Near Me</Link></li>
        </ul>
      </div>
    </header>
  );
}

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
            <li><Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>Explore</Link></li>
            <li><a href="/#destinations" className="navbar__link">Destinations</a></li>
            <li><a href="/#location" className="navbar__link">Near Me</a></li>
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
          <li><Link to="/" className="navbar__mobile-link">Explore</Link></li>
          <li><a href="/#destinations" className="navbar__mobile-link">Destinations</a></li>
          <li><a href="/#location" className="navbar__mobile-link">Near Me</a></li>
        </ul>
      </div>
    </header>
  );
}

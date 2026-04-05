import { useState } from 'react';

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <img src="/sanglicitylogo.jpeg" alt="Sangli City Logo" className="navbar-logo" />
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className="hamburger" />
        </button>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1a365d, #2d5a87)',
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 20px rgba(0,0,0,0.15)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <img 
            src="/logos/sheep_colored.png" 
            alt="Sheep Parade Logo" 
            style={{
              height: '50px',
              width: 'auto'
            }}
          />
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: 0
          }}>
            Sheep Parade 2026
          </h1>
        </div>
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '2rem'
          }}>
            <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#sponsors" style={{ color: 'white', textDecoration: 'none' }}>Sponsors</a></li>
            <li><a href="#goede-doelen" style={{ color: 'white', textDecoration: 'none' }}>Goede Doelen</a></li>
            <li><a href="#pricing" style={{ color: 'white', textDecoration: 'none' }}>Formules</a></li>
            <li><a href="#location" style={{ color: 'white', textDecoration: 'none' }}>Locatie</a></li>
            <li><a href="#catalog" style={{ color: 'white', textDecoration: 'none' }}>Catalogus</a></li>
            <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a365d, #2d5a87)',
      color: 'white',
      padding: '3rem 2rem 2rem',
      marginTop: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Event Info */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#ecf0f1'
            }}>
              Sheep Parade 2026
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#bdc3c7',
              marginBottom: '1rem'
            }}>
              De 5e jubileumeditie van de unieke kunstveiling georganiseerd door Ronde Tafel 101 Lier.
            </p>
            <div style={{
              backgroundColor: 'rgba(52, 152, 219, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #3498db'
            }}>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                color: '#ecf0f1'
              }}>
                <strong>📅 7 februari 2026</strong><br />
                Squadra Abarth & Rally Collection, Lier
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#ecf0f1'
            }}>
              Snelle Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#home" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#3498db'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}>
                  🏠 Home
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#pricing" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#3498db'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}>
                  💰 Formules
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#location" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#3498db'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}>
                  📍 Locatie
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#catalog" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#3498db'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}>
                  📚 Catalogus
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#3498db'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}>
                  📞 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#ecf0f1',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Contact
              <img 
                src="/logo's/rt_symbol.png" 
                alt="Round Table Symbol" 
                style={{
                  height: '30px',
                  width: 'auto'
                }}
              />
            </h3>
            <div style={{
              backgroundColor: 'rgba(46, 204, 113, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #2ecc71'
            }}>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                color: '#ecf0f1',
                fontWeight: 'bold'
              }}>
                Sander Goossens
              </p>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem',
                color: '#bdc3c7',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                Secretaris Ronde Tafel 101 Lier
                <img 
                  src="/logo's/rt_symbol.png" 
                  alt="Round Table Symbol" 
                  style={{
                    height: '20px',
                    width: 'auto',
                    opacity: '0.7'
                  }}
                />
              </p>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                color: '#3498db',
                fontWeight: 'bold'
              }}>
                📱 0478/24.01.65
              </p>
            </div>
          </div>

          {/* Previous Success */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#ecf0f1'
            }}>
              Vorige Editie
            </h3>
            <div style={{
              backgroundColor: 'rgba(241, 196, 15, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid #f1c40f'
            }}>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                color: '#ecf0f1',
                fontWeight: 'bold'
              }}>
                2022: Groot Succes! 🎉
              </p>
              <p style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.9rem',
                color: '#bdc3c7'
              }}>
                200 aanwezigen
              </p>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                color: '#f1c40f',
                fontWeight: 'bold'
              }}>
                💰 €20.000 opgehaald
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            margin: '0 0 1rem 0',
            fontSize: '1rem',
            color: '#bdc3c7'
          }}>
            © 2026 Ronde Tafel 101 Lier - Sheep Parade Jubileumeditie
          </p>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#7f8c8d',
            fontStyle: 'italic'
          }}>
            Samen maken we van kunst een kracht voor het goede doel 🎨❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Catalog: React.FC = () => {
  return (
    <section id="catalog" style={{
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          Catalogus
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* 2018 Catalog */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            border: '2px solid #95a5a6'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#95a5a6',
              marginBottom: '1rem'
            }}>
              2018
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              1e Editie
            </h3>
            <p style={{
              color: '#7f8c8d',
              fontSize: '1rem'
            }}>
              Catalogus beschikbaar
            </p>
          </div>

          {/* 2022 Catalog */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            border: '2px solid #3498db'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#3498db',
              marginBottom: '1rem'
            }}>
              2022
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              4e Editie
            </h3>
            <p style={{
              color: '#7f8c8d',
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Catalogus beschikbaar
            </p>
            <div style={{
              backgroundColor: '#e8f6f3',
              padding: '1rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              color: '#27ae60'
            }}>
              <strong>€20.000 opgehaald!</strong><br />
              200 aanwezigen
            </div>
          </div>

          {/* 2026 Catalog */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            border: '3px solid #f39c12',
            position: 'relative',
            transform: 'scale(1.05)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#f39c12',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              NIEUW
            </div>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#f39c12',
              marginBottom: '1rem'
            }}>
              2026
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              5e Jubileumeditie
            </h3>
            <p style={{
              color: '#e67e22',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Nog niet beschikbaar
            </p>
            <div style={{
              backgroundColor: '#fef9e7',
              padding: '1rem',
              borderRadius: '10px',
              fontSize: '0.9rem',
              color: '#f39c12',
              marginTop: '1rem'
            }}>
              <strong>7 februari 2026</strong><br />
              Squadra Abarth & Rally Collection
            </div>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#2c3e50',
            marginBottom: '1rem'
          }}>
            Historische Edities
          </h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Sinds 2018 organiseert Ronde Tafel 101 Lier deze unieke kunstveiling. Elke editie brengt kunstenaars, bekende Vlamingen en filantropen samen voor het goede doel. De catalogussen van vorige edities tonen de rijke geschiedenis van dit bijzondere evenement en de prachtige kunstwerken die geveild werden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

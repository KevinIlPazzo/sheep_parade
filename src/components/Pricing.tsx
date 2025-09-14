import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={{
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#1a365d'
        }}>
          Formules
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Sponsor Formula */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '3px solid #d4a574',
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
              PREMIUM
            </div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Sponsor-Formule
            </h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#f39c12',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>
              €1.250
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ Tafel voor 6 personen binnen de Platinum-Zone
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ Fingerfood en luxe walking dinner
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ 3 flessen Champagne
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ Visibiliteit tijdens het event op de foto-wall bij ontvangst
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                ✓ Visibiliteit op TV-schermen, Website, Uitnodigingen, Kunstcatalogus en Facebook-event
              </li>
            </ul>
          </div>

          {/* Table Formula */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '2px solid #3498db'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Tafel-Formule
            </h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#3498db',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>
              €800
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ Tafel voor 6 personen binnen de Gold-Zone
              </li>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                ✓ Fingerfood en luxe walking dinner
              </li>
              <li style={{ padding: '0.5rem 0' }}>
                ✓ 2 flessen Champagne
              </li>
            </ul>
          </div>

          {/* Ticket Formula */}
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '2px solid #27ae60'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Toegangskaart
            </h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#27ae60',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}>
              €30
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ padding: '0.5rem 0' }}>
                ✓ Toegang tot de Silver-Zone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

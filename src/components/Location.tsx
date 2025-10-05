import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" style={{
      padding: '4rem 2rem',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#2c3e50'
        }}>
          Locatie
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <img 
              src="/picture_of_location.jpg" 
              alt="Squadra Abarth & Rally Collection Location" 
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                marginBottom: '2rem',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '1rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h4 style={{ 
                margin: '0 0 0.5rem 0', 
                fontSize: '1.2rem',
                fontWeight: 'bold' 
              }}>
                Squadra Abarth & Rally Collection
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '0.9rem',
                opacity: 0.9 
              }}>
                De perfecte locatie voor een exclusieve kunstveiling
              </p>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '2rem',
              color: '#e74c3c',
              marginBottom: '1.5rem'
            }}>
              Squadra Abarth & Rally Collection
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: '#555'
            }}>
              Squadra Abarth & Rally Collection is een museum dat de passie voor autosport tot leven brengt. Je vindt hier een indrukwekkende verzameling klassieke auto's, iconen uit de rallywereld en meesterwerken van Italiaanse designlegendes.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: '#555'
            }}>
              Het is een eerbetoon aan Carlo Abarth, de man die zijn stempel drukte op de autosportgeschiedenis met zijn baanbrekende ontwerpen en onmiskenbare stijl. Van de abarth 595, die snelheid en charme combineert, tot de krachtige Abarth 131 rally, brengt onze collectie zijn nalatenschap in al zijn glorie tot leven.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: '#555'
            }}>
              Hoewel Abarth de kern vormt van de collectie, biedt de Squadra Abarth & Rally Collection veel meer. Van Fiat en Simca tot Alfa Romeo en Porsche, het museum herbergt de grootste namen uit de automobiele wereld. Elk merk vertegenwoordigt een uniek hoofdstuk in de geschiedenis van autosport met innovatieve designs en specificaties.
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{
              fontSize: '1.5rem',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Collectie Highlights
            </h4>
            
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              <div style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                borderLeft: '4px solid #e74c3c'
              }}>
                <strong>175+ Voertuigen</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Een ongeëvenaarde blik op de rijke geschiedenis van rallysport
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                borderLeft: '4px solid #f39c12'
              }}>
                <strong>Fiat Abarth 124 Rally</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Stoere klassiekers uit de rallywereld
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                borderLeft: '4px solid #27ae60'
              }}>
                <strong>Lancia Delta Integrale</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Legendarische prestaties op de racecircuits
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                borderLeft: '4px solid #3498db'
              }}>
                <strong>Italiaanse Designlegendes</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>
                  Meesterwerken van automotieve kunst
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#2c3e50',
          color: 'white',
          borderRadius: '15px'
        }}>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            margin: 0
          }}>
            Met meer dan 175 voertuigen biedt het museum een ongeëvenaarde blik op de rijke geschiedenis van rallysport en autosport. Van de stoere Fiat Abarth 124 Rally tot de legendarische Lancia Delta Integrale, elk voertuig is met zorg gerestaureerd en herinnert aan de glorieuze prestaties op de racecircuits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;

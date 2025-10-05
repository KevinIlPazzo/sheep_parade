import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    naam: '',
    telefoonnummer: '',
    mailadres: '',
    onderwerp: '',
    vraag: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
  };

  return (
    <section id="contact" style={{
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
          Contact
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Form */}
          {/* <div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '1.5rem'
            }}>
              Stel uw vraag:
            </h3>
            
            <form onSubmit={handleSubmit} style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  Naam:
                </label>
                <input
                  type="text"
                  name="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  Telefoonnummer:
                </label>
                <input
                  type="tel"
                  name="telefoonnummer"
                  value={formData.telefoonnummer}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  Mailadres:
                </label>
                <input
                  type="email"
                  name="mailadres"
                  value={formData.mailadres}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  Onderwerp:
                </label>
                <select
                  name="onderwerp"
                  value={formData.onderwerp}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: 'white',
                    transition: 'border-color 0.3s'
                  }}
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="deelname">Deelname als gast</option>
                  <option value="kunstenaar">Deelname als kunstenaar</option>
                  <option value="sponsor">Sponsoring mogelijkheden</option>
                  <option value="algemeen">Algemene vraag</option>
                  <option value="pers">Pers & Media</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#2c3e50'
                }}>
                  Vraag:
                </label>
                <textarea
                  name="vraag"
                  value={formData.vraag}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  width: '100%'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
              >
                Verstuur Bericht
              </button>
            </form>
          </div> */}
          
          {/* Contact Information */}
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#2c3e50',
              marginBottom: '1.5rem'
            }}>
              Contactgegevens
            </h3>
            
            <div style={{
              backgroundColor: '#2c3e50',
              color: 'white',
              padding: '2rem',
              borderRadius: '15px',
              marginBottom: '2rem'
            }}>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#ecf0f1'
              }}>
                Sander Goossens
              </h4>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
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
                    opacity: '0.8'
                  }}
                />
              </p>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                margin: 0,
                color: '#3498db'
              }}>
                0478/24.01.65
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{
                fontSize: '1.3rem',
                marginBottom: '1rem',
                color: '#2c3e50'
              }}>
                Goede Doelen & Sponsors
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '1rem'
              }}>
                <strong>Goede doelen:</strong> Info volgt.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#555'
              }}>
                <strong>Sponsors:</strong> Info volgt.
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#e8f6f3',
              padding: '1.5rem',
              borderRadius: '10px',
              marginTop: '2rem',
              border: '2px solid #27ae60'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: '#27ae60',
                marginBottom: '0.5rem'
              }}>
                💡 Wist je dat...
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: '#2c3e50',
                margin: 0,
                lineHeight: '1.5'
              }}>
                De vorige editie in 2022 maar liefst €20.000 opbracht voor lokale goede doelen? Samen maken we ook van de 5e editie een groot succes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

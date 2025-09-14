import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #4a90a4 100%)',
      color: 'white',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Jubileumeditie: de 5e Sheep Parade is hier!
        </h1>
        
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '15px',
          marginTop: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Ronde Tafel 101 van Lier is trots om op <strong>zaterdag 7 februari 2026</strong> voor de vijfde keer een unieke kunstveiling te organiseren. Deze jubileumeditie vindt plaats bij Squadra Abarth & Rally Collection te Lier, dat bekendstaat om zijn indrukwekkende collectie van meer dan 175 klassieke rallywagens. Een prachtige locatie die perfect past bij de exclusieve sfeer van deze avond.
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            De Sheep Parade staat opnieuw onder de deskundige leiding van de gerenommeerde veilingmeester Peter Bernaerts. Samen met een nog aan te kondigen Bekende Vlaming zal hij de traditioneel gedecoreerde kunststoffen schapen, kunstwerken en unieke experiences per opbod veilen. Gevestigde kunstenaars en bekende Vlamingen hebben hun deelname al bevestigd, onder wie Kevin Langedijk, Liesbet Valgaeren en Pascale Naessens.
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            Net als bij de vorige edities gaat de opbrengst naar het goede doel, ook dit jaar worden zorgvuldig geselecteerde lokale projecten in en rond Lier ondersteund.
          </p>
          
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '1.5rem',
            borderRadius: '10px',
            marginTop: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vorige Editie - Groot Succes!</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              In oktober 2022 vond de 4e editie plaats met 200 aanwezigen, onder het peterschap van Rik Verwaest werd maar liefst <strong>€20.000 ingezameld</strong>. De opbrengst is naar vier goede doelen gegaan: het Emma De Prince Fonds, We Love Mariefonds, Emiliushoeve en Villavip Berlaar.
            </p>
          </div>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            Wil je erbij zijn en de unieke sfeer van deze kunstveiling zelf beleven? Of wil je als kunstenaar of sponsor bijdragen aan dit maatschappelijk geëngageerde event? Neem contact op met de leden van Ronde Tafel 101 Lier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import './GoedeDoelen.css';

const causes = [
  {
    name: 'Sport IT',
    description: 'Organiseert zomerkampen in Lier of België voor kansarme kinderen uit Lier. Dankzij jullie steun kan de vzw gedurende 5 dagen gespecialiseerde begeleiders, materiaal, locaties, activiteiten en maaltijden aanbieden om een onvergetelijke ervaring na te laten.',
  },
  {
    name: 'Magische Kerst VZW',
    description: 'Niet elk kind beleeft een warme Kerst. Daarom schenkt Magische Kerst vzw zorgvuldig samengestelde cadeaus aan kinderen van 0 tot 12 jaar die in armoede leven. Elk pakket bevat een boek en duurzaam speelgoed, als krachtige boodschap: jij telt, jij verdient een Magische Kerst. Met de steun van lokale besturen zoals Lier, Lint en Ranst bereikten we in 2025 maar liefst 800 kinderen. En met jouw hulp willen we nog veel meer gezinnen een warm kerstgevoel bezorgen.',
  },
  {
    name: 'Alzheimer Liga Vlaanderen',
    description: 'Alzheimer Liga Vlaanderen is het centrale aanspreekpunt voor mensen met dementie, hun mantelzorgers en iedereen die door dementie wordt geraakt. De organisatie zet zich in om de levenskwaliteit van mensen met dementie en hun naasten te verbeteren door ondersteuning te bieden, informatie te delen en het maatschappelijk bewustzijn te vergroten. Zo werkt Alzheimer Liga Vlaanderen mee aan een samenleving waarin mensen met dementie volwaardig kunnen blijven deelnemen.',
  },
];

function GoedeDoelen() {
  return (
    <section id="goede-doelen" className="goede-doelen">
      <div className="container">
        <h2>Goede Doelen</h2>
        <p className="intro">
          De Ronde Tafel 101 van Lier is bijzonder fier dat we reeds voor de vijfde keer een unieke kunstveiling voor het "goede doel" kan organiseren. Traditiegetrouw selecteerden we in samenspraak met zijn peter <strong>Mathias Coppens</strong> verschillende goede doelen met een duidelijk en concreet bestedingsplan voor de regio Lier en omstreken, waaronder:
        </p>
        <div className="causes-grid">
          {causes.map((cause, index) => (
            <div key={index} className="cause-card">
              <h3>{cause.name}</h3>
              <p>{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoedeDoelen;

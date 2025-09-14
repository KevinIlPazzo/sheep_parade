import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Pricing from './components/Pricing.tsx';
import Location from './components/Location.tsx';
import Catalog from './components/Catalog.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Pricing />
        <Location />
        <Catalog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

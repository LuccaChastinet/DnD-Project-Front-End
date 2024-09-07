import Header from './header';
import Footer from './footer';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './home';
import Spells from './spells';
import Ferramentas from './ferramentas'

function Main() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1, marginTop: '80px', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/magias" element={<Spells />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Main;

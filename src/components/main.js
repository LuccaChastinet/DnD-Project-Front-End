import Header from './header';
import Footer from './footer';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './home';
import Spells from './spells';
import Ferramentas from './ferramentas'

function Main() {
  return (
    <React.Fragment>
    <Header />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/magias" element={<Spells />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    </React.Fragment>

  );
}

export default Main;

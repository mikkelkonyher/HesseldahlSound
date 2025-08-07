import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SelectedWork from './pages/SelectedWork';
import HowToSendFiles from './pages/HowToSendFiles';
import Rates from './pages/Rates';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<SelectedWork />} />
            <Route path="/files" element={<HowToSendFiles />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
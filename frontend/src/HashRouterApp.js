import React from 'react';
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SelectedWork from './pages/SelectedWork';
import HowToSendFiles from './pages/HowToSendFiles';
import Rates from './pages/Rates';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

// This is an alternative version of App.js that uses HashRouter instead of BrowserRouter
// HashRouter doesn't require server configuration for client-side routing
// To use this version, replace the import in index.js from:
// import App from "./App";
// to:
// import App from "./HashRouterApp";

function HashRouterApp() {
  return (
    <div className="App">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default HashRouterApp;
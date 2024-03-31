import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import MissionPage from './pages/MissionPage';
import Services from './pages/Services';
import TestimonialSlider from './pages/TestimonialSlider';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import OurClients from './pages/OurClients';
import Protection from './pages/Protection';
import Footer from './pages/Footer';
import AboutUsDetails from './pages/AboutUsDetail/AboutUsDetails';
import ServicePage from './pages/ServiceDetail/pages/ServicePage';
import ContactPages from './pages/ContactDetail/pages/ContactPages';
import "./styles/style.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<AboutUsDetails />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/services"  element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {isHomePage && (
        <div>
          <HomePage />
          <About />
          <MissionPage />
          <Services />
          <TestimonialSlider />
          <OurTeam />
          <Contact />
          <OurClients />
          <Protection />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
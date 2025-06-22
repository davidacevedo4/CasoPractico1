import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventsList from './pages/EventsList';
import LocationsList from './pages/LocationsList';
import ContactsList from './pages/ContactsList';


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/locations" element={<LocationsList />} />
<Route path="/contacts" element={<ContactsList />} />

            {/* Más rutas: /locations y /contacts */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

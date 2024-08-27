import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Histo from './components/History';
import AboutParliament from './components/AboutParliament';
import Speakers from './components/Speakers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-parliament" element={<AboutParliament />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/history" element={<Histo />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;

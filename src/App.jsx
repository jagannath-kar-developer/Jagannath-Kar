// src/App.jsx
// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Certifications';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />
      
    </div>
  );
};

export default App;

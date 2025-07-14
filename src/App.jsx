

import React from 'react';
import './App.css';
import Card from './Card.jsx';
import dp from './assets/vecto.jpg';
import Header from './Header.jsx';
import Comment from './Comment.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import ContactPage from './ContactPage.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      {/* Navigation bar removed as requested */}
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Card CardImg={dp} alt="My Picture" />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="contact">
              <Comment />
            </section>
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App

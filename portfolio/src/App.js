import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Nav from './Component/nav/Nav';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import About from './Component/AboutMe/About'
import Portfolio from './Component/portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import Tesinominal from './Component/Tesinominal/Tesinominal';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Tesinominal/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;

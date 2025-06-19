import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
       <section id='home'>
             <Home/>
       </section>
      <section id="about">
        <About />
      </section>
           
      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;

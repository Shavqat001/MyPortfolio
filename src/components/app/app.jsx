import React, { useState, useEffect } from 'react';
import Header from '../blocks/header/header';
import Footer from '../blocks/footer/footer';
import Home from '../layout/home/home';
import About from '../layout/about/about';
import Skills from '../layout/skills/skills';
import Projects from '../layout/projects/projects';
import Contacts from '../layout/contacts/contacts';
import './style.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header 
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      <Home onScrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

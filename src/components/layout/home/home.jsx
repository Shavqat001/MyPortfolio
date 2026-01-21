import React from 'react';
import Button from '../../ui/button/button';
import photo from '/src/assets/me.jpg';
import './style.css';

function Home({ onScrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={photo} alt="Ваше фото" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            Привет, я <span className="gradient-text">Разработчик</span>
          </h1>
          <p className="hero-subtitle">Frontend Developer & Full Stack Enthusiast</p>
          <p className="hero-description">
            23 года | 2 года опыта в программировании
          </p>
          <div className="hero-buttons">
            <Button variant="primary" onClick={() => onScrollToSection('projects')}>
              Мои проекты
            </Button>
            <Button variant="secondary" onClick={() => onScrollToSection('contact')}>
              Связаться
            </Button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Home;

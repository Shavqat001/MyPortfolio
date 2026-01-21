import React, { useState, useEffect } from 'react'
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si';
import photo from '/src/assets/me.jpg';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Навигация */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">Portfolio</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className={activeSection === 'home' ? 'active' : ''}>Главная</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className={activeSection === 'about' ? 'active' : ''}>О себе</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }} className={activeSection === 'skills' ? 'active' : ''}>Навыки</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className={activeSection === 'projects' ? 'active' : ''}>Проекты</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className={activeSection === 'contact' ? 'active' : ''}>Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero секция */}
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
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                Мои проекты
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Связаться
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* О себе */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">01.</span> О себе
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Меня зовут <strong>Shavqat</strong>, мне 23 года, и я увлеченный разработчик 
                с 2-летним опытом в создании веб-приложений. Я специализируюсь на 
                frontend-разработке с использованием современных технологий.
              </p>
              <p>
                Моя страсть к программированию началась с изучения основ веб-разработки, 
                и с тех пор я постоянно совершенствую свои навыки. Я люблю создавать 
                красивые, функциональные и интуитивно понятные интерфейсы.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Года опыта</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">23</div>
                  <div className="stat-label">Года</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Проектов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Навыки */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> Навыки
          </h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💾</div>
              <h3>Базы данных</h3>
              <div className="skill-tags">
                <span className="tag">MySQL</span>
                <span className="tag">SQL Server</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🖥️</div>
              <h3>Операционные системы</h3>
              <div className="skill-tags">
                <span className="tag">Windows</span>
                <span className="tag">Linux</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Бэкенд системы</h3>
              <div className="skill-tags">
                <span className="tag">NodeJS</span>
                <span className="tag">C# (база)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">03.</span> Проекты
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-placeholder">
                <span>🚀</span>
                <p>Добавьте ваши проекты</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-placeholder">
                <span>💡</span>
                <p>Добавьте ваши проекты</p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-placeholder">
                <span>⚡</span>
                <p>Добавьте ваши проекты</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">04.</span> Контакты
          </h2>
          <div className="contact-content">
            <p className="contact-description">
              Свяжитесь со мной через любой из указанных способов
            </p>
            <div className="contact-links">
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaTelegram className="contact-icon" />
                <span>Telegram</span>
                <span className="contact-username">@Proger2807</span>
              </a>
              <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="contact-link">
                <SiWhatsapp className="contact-icon" />
                <span>WhatsApp</span>
                <span className="contact-username">+992 (988) 77-28-07</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaGithub className="contact-icon" />
                <span>GitHub</span>
                <span className="contact-username">@Shavqat001</span>
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaYoutube className="contact-icon" />
                <span>YouTube</span>
                <span className="contact-username">@ArmorCoder</span>
              </a>
            </div>
            <div className="contact-email">
              <p>Или напишите на email:</p>
              <a href="mailto:your.email@example.com" className="email-link">nazriev.shavqatjon@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Shavqat. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

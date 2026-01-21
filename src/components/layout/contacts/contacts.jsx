import React from 'react';
import { FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import Title from '../../ui/title/title';
import contacts from '/src/mocks/contacts';
import './style.css';

function Contacts() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'telegram':
        return <FaTelegram className="contact-icon" />;
      case 'whatsapp':
        return <SiWhatsapp className="contact-icon" />;
      case 'github':
        return <FaGithub className="contact-icon" />;
      case 'youtube':
        return <FaYoutube className="contact-icon" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Title number="04">Контакты</Title>
        <div className="contact-content">
          <p className="contact-description">
            Свяжитесь со мной через любой из указанных способов
          </p>
          <div className="contact-links">
            {contacts.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {getIcon(link.icon)}
                <span>{link.name}</span>
                <span className="contact-username">{link.username}</span>
              </a>
            ))}
          </div>
          <div className="contact-email">
            <p>Или напишите на email:</p>
            <a href={`mailto:${contacts.email}`} className="email-link">
              {contacts.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

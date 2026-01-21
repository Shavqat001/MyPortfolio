import React from 'react';
import Title from '../../ui/title/title';
import aboutMe from '/src/mocks/aboutMe';
import './style.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Title number="01">О себе</Title>
        <div className="about-content">
          <div className="about-text">
            {aboutMe.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split(aboutMe.name).map((part, i, arr) => (
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>
                      {part}
                      <strong>{aboutMe.name}</strong>
                    </React.Fragment>
                  ) : part
                ))}
              </p>
            ))}
            <div className="about-stats">
              {aboutMe.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

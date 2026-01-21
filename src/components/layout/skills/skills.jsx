import React from 'react';
import Title from '../../ui/title/title';
import skills from '/src/mocks/skills';
import './style.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Title number="02">Навыки</Title>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.technologies.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

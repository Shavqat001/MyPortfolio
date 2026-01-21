import React from 'react';
import Title from '../../ui/title/title';
import projects from '/src/mocks/projects';
import './style.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Title number="03">Проекты</Title>
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-placeholder">
                    <span>🚀</span>
                    <p>{project.title}</p>
                  </div>
                )}
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

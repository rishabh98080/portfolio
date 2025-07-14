import React from 'react';
import './ProjectCard.css';

function ProjectCard({ name, link, bullets }) {
  return (
    <div className="project-card">
      <h2 className="project-title">
        {name}
      </h2>
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <ul className="project-bullets">
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;

import React from 'react';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects">
      <ProjectCard
        name="Awesome Portfolio Website"
        link="https://your-project-demo-link.com"
        bullets={[
          'Built with React and Vite',
          'Responsive and modern UI',
          'Showcases my web development skills',
          'Deployed on Netlify'
        ]}
      />
    </section>
  );
}

export default Projects;

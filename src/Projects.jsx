import React from 'react';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects">
      <ProjectCard
        name="Banking System"
        link="https://github.com/rishabh98080/Banking-System-with-SQL-in-JAVA"
        bullets={[
          'Built using Java and MySQL',
          'Demonstrate all the feature of banking service',
          'Use JDBC',
        ]}
      />
            <ProjectCard
        name="Currency Converter"
        link="https://github.com/rishabh98080/Currency-Converter-in-Java"
        bullets={[
          'Built using Java and JSON',
          'Demostrate the usage of an API',
          'Uses JSON from retrieval of real-time data',
        ]}
      />
            <ProjectCard
        name="Beginner in Web Development"
        link="https://github.com/rishabh98080/Background-Changing-Colour-using-HTML-CSS-JavaScript"
        bullets={[
          'Built using HTML,JavaScript,CSS',
          'This is Project inn which you can chnage color of background with buttons',
        ]}
      />
      
    </section>
  );
}

export default Projects;

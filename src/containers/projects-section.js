import React from 'react';
import Project from '../components/project';
import Publications from '../components/publications';
import Footer from '../components/footer';
import projects from '../data/projects';

const ProjectsSection = () => (
  <div id="projects">
    {projects.map(project => (
      <Project
        key={project.id}
        title={project.title}
        description={project.description}
        tech={project.tech}
        imgSrc={project.imgSrc}
        alt={project.alt}
        source={project.source}
        live={project.live}
        style={project.styler}
      />
    ))}
    <Publications />
    <Footer />
  </div>
);

export default ProjectsSection;

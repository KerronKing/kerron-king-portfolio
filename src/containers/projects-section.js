import React from 'react';
import Project from '../components/project';
import Publications from '../components/publications';
import Footer from '../components/footer';
import projects from '../data/projects';

const ProjectsSection = () => (
  <div>
    {projects.map(project => (
      <Project
        key={project.id}
        title={project.title}
        description={project.description}
        tech={project.tech}
      />
    ))}
    <Publications />
    <Footer />
  </div>
);

export default ProjectsSection;

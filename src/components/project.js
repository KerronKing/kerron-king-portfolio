import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, description, tech }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      {tech.map(item => (
        <span key={item}>{item}</span>
      ))}
    </p>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.instanceOf(Array).isRequired,
};

export default Project;

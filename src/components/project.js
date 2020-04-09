import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  title, description, imgSrc, alt, source, live, style,
}) => (
  <div className="project-tile" id={style}>
    <h2>{title}</h2>
    <img
      src={imgSrc}
      alt={alt}
      height="400"
      width="400"
    />
    <p>{description}</p>
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
    >
      Source code
    </a>
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live demo
    </a>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Project;
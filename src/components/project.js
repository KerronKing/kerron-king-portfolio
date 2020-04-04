import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  title, description, tech, imgSrc, alt, source, live, style,
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
    <p>
      {tech.map(item => (
        <span key={item}>{item}</span>
      ))}
    </p>
    <a href={source}>See the code</a>
    <a href={live}>Live demo</a>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.instanceOf(Array).isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default Project;

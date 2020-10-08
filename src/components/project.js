import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const Project = ({
  title, description, imgSrc, alt, source, live, style,
}) => (
  <Slide left>
    <div className="project-tile" id={style}>
      <h2>{title}</h2>
      <Zoom>
        <img src={imgSrc} alt={alt} height="400" width="400" />
      </Zoom>
      <p>{description}</p>
      <Zoom left>
        <a href={source} target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      </Zoom>
      <Zoom left>
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live demo
        </a>
      </Zoom>
    </div>
  </Slide>
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

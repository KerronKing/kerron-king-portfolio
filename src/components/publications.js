import React from 'react';
import pubs from '../data/articles';

const Publications = () => (
  <div>
    {pubs.map(pub => (
      <div key={pub.id}>
        <img
          src={pub.image}
          alt={pub.alt}
          height="80"
          width="80"
        />
        <a href={pub.ref}>
          {pub.title}
        </a>
      </div>
    ))}
  </div>
);

export default Publications;

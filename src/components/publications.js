import React from 'react';
import pubs from '../data/articles';

const Publications = () => (
  <div id="publications">
    <h2>Publications</h2>
    {pubs.map(pub => (
      <div key={pub.id} className="pubs">
        <img
          src={pub.image}
          alt={pub.alt}
          height="80"
          width="80"
        />
        <a
          href={pub.ref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pub.title}
        </a>
      </div>
    ))}
  </div>
);

export default Publications;

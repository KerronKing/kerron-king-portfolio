import React from 'react';
import contacts from '../data/contacts';

const Info = () => (
  <div id="info">
    <h1>KERRON KING</h1>
    <p>
      I&apos;m a software engineer based in Trinidad and Tobago.&#32;
      Let&apos;s work together to solve the world&apos;s problems one click at a time.
    </p>
    <div className="social">
      {contacts.map(contact => (
        <a
          key={contact.id}
          href={contact.ref}
          rel="noopener noreferrer"
          target="_blank"
          alt={contact.alt}
        >
          <img
            src={contact.imgSrc}
            alt={contact.alt}
            height="30"
            width="30"
          />
        </a>
      ))}
    </div>
    <a href="mailto:kerronk1989@gmail.com?subject=Profile Follow Up">
      <button type="submit">Send a message</button>
    </a>
  </div>
);

export default Info;

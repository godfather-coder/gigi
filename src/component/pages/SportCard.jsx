// src/components/SportCard.js
import React from 'react';
import './SportCard.css';

const SportCard = ({ complex }) => {
  return (
    <div className="sport-card">
      <h3>{complex.name}</h3>
      <p>{complex.description}</p>
      <p>Location: {complex.location}</p>
      <p>Price: ${complex.price}</p>
      <div>
        <h4>Spaces:</h4>
        <ul>
          {complex.spaces.map((space, index) => (
            <li key={index}>{space}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Photos:</h4>
        <div className="photo-links">
          {complex.links.map((link, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              <img src={link} alt={`Sport complex ${index + 1}`} className="photo" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportCard;

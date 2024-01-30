import React from 'react';

export default function Card({ genre, image, color }) {
  return (
    <div className="genres" style={{ backgroundColor: color }}>
      <label>{genre.content}</label>
      <img
        aria-hidden="false"
        draggable="false"
        loading="lazy"
        src={image}
        alt={" Card for " + genre.content}
      />
    </div>
  );
}

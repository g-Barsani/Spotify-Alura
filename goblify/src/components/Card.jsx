import React from 'react';

export default function Card({ genre, image }) {
  return (
    <div className="genres">
      <label>{genre.content}</label>
      <img
        aria-hidden="false"
        draggable="false"
        loading="lazy"
        src={image}
        alt="Os cegos vão ver"
      />
    </div>
  );
}

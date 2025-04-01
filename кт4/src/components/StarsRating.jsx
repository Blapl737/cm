import React from 'react';
import '../index.css';

const Stars = ({ rating }) => {
  const renderStars = () => {
    const totalStars = 5;
    const roundedRating = Math.round(rating);
    let stars = '';

    for (let i = 0; i < totalStars; i++) {
      stars += i < roundedRating ? '★' : '☆';
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Stars;

import React from "react";

const Stars = ({ rating }) => {
  const totalStars = 5;
  const activeStars = Math.round(rating);

  const renderStars = () => {
    return Array.from({ length: totalStars }, (_, index) => {
      const isActive = index < activeStars;
      return (
        <span
          key={index}
          className={`fa fa-star${isActive ? " active" : ""}`}
        ></span>
      );
    });
  };

  return <div className="stars">{renderStars()}</div>;
};

export default Stars;

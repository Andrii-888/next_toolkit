"use client";
import React from "react";
import ReactStars from "react-rating-stars-component";

const Stars = ({ rating = 0, onRatingChange }) => {
  return (
    <div className="flex justify-center items-center">
      <ReactStars
        count={5}
        isHalf={true}
        value={rating}
        onChange={onRatingChange}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Stars;

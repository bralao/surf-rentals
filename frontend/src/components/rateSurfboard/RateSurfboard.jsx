import React, { useState } from 'react';
import './RateSurfboard.css';

const RateSurfboard = ({ surfboard }) => {
  const [rateData, setRateData] = useState({
    totalRatings: 0,
    sumOfRatings: 0,
    averageRating: 0
  });

  const handleRateChange = () => {
    const inputRate = prompt('Please enter the new rate (0-5):');
    const rate = parseFloat(inputRate);
    if (!isNaN(rate) && rate >= 0 && rate <= 5) {
      const newTotalRatings = rateData.totalRatings + 1;
      const newSumOfRatings = rateData.sumOfRatings + rate;
      const newAverageRating = newSumOfRatings / newTotalRatings;

      setRateData({
        totalRatings: newTotalRatings,
        sumOfRatings: newSumOfRatings,
        averageRating: newAverageRating
      });

      alert(`New rate submitted: ${rate}`);
      // Optionally, you can update surfboard rate here if needed
    } else {
      alert('Invalid rate! Rate must be a number between 0 and 5.');
    }
  };

  return (
    <div className="rate">
      <button onClick={handleRateChange}>
        <h5>Rate:</h5>
        <h3>{rateData.averageRating.toFixed(1)}</h3> {/* Display average rating */}
        <h5>/5</h5>
      </button>
    </div>
  );
};

export default RateSurfboard;

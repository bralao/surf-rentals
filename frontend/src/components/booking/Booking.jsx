import React, { useState } from 'react';
import './Booking.css';

const BookNow = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value); // Update selectedOption state with the selected value
  };

  return (
    <div className="booking">
      <div className="days">
        <h4>How many days?</h4>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Choose an option</option>
          <option value="1 day">1 day</option>
          <option value="2 days">2 days</option>
          <option value="3 days">3 days</option>
          <option value="4 days">4 days</option>
          <option value="5 days">5 days</option>
          <option value="6 days">6 days</option>
          <option value="7 days">7 days</option>
          <option value="8 days">8 days</option>
          <option value="9 days">9 days</option>
          <option value="10 days">10 days</option>
        </select>
      </div>
      <div className="wetsuit">
        <h4>Do you need a wetsuit?</h4>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="booknow">
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default BookNow;

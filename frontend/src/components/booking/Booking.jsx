import React, { useState, useContext } from 'react';
import './Booking.css';
import { ShopContext } from '../../context/ShopContext';

const BookNow = (props) => {
  const [selectedDays, setSelectedDays] = useState(""); // State to hold the selected days
  const [selectedWetsuit, setSelectedWetsuit] = useState(""); // State to hold the selected wetsuit option
  const { surfboard } = props;
  const { addToCart } = useContext(ShopContext); // Destructure addToCart from the context

  const handleDaysDropdownChange = (event) => {
    setSelectedDays(event.target.value);
  };

  const handleWetsuitDropdownChange = (event) => {
    setSelectedWetsuit(event.target.value);
  };

  return (
    <div className="booking">
      <div className="days">
        <h4>How many days?</h4>
        <select value={selectedDays} onChange={handleDaysDropdownChange}>
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
        <select value={selectedWetsuit} onChange={handleWetsuitDropdownChange}>
          <option value="">Choose an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="booknow">
        <button onClick={() => {addToCart(surfboard.id, selectedDays, selectedWetsuit)} }>Book Now</button>
      </div>
    </div>
  );
};

export default BookNow;

import React from 'react';

const Slider = ({ currentTime, onTimeChange }) => {
  const handleChange = (event) => {
    const hours = parseInt(event.target.value, 10);
    const newTime = currentTime.clone().hours(hours);
    onTimeChange(newTime);
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="23"
        value={currentTime.hours()}
        onChange={handleChange}
      />
      <div>{currentTime.format('HH:mm')}</div>
    </div>
  );
};

export default Slider;

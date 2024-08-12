import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-picker">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
      />
    </div>
  );
};

export default DatePicker;

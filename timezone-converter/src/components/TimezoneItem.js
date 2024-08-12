import React from 'react';
import moment from 'moment-timezone';

const TimezoneItem = ({ timezone, currentTime, selectedDate, removeTimezone }) => {
  const timeInTimezone = moment.tz(selectedDate, timezone).hours(currentTime.hours()).format('YYYY-MM-DD HH:mm');

  return (
    <li>
      <span>{timezone}: {timeInTimezone}</span>
      <button onClick={() => removeTimezone(timezone)}>x</button>
    </li>
  );
};

export default TimezoneItem;

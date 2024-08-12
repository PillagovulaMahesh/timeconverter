import React from 'react';
import TimezoneItem from './TimezoneItem';

const TimezoneList = ({ timezones, currentTime, selectedDate, addTimezone, removeTimezone }) => {
  const [newTimezone, setNewTimezone] = React.useState('');

  const handleAddTimezone = () => {
    addTimezone(newTimezone);
    setNewTimezone('');
  };

  return (
    <div className="timezone-list">
      <input
        type="text"
        placeholder="Add Timezone"
        value={newTimezone}
        onChange={(e) => setNewTimezone(e.target.value)}
      />
      <button onClick={handleAddTimezone}>Add</button>
      <ul>
        {timezones.map((timezone) => (
          <TimezoneItem
            key={timezone}
            timezone={timezone}
            currentTime={currentTime}
            selectedDate={selectedDate}
            removeTimezone={removeTimezone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TimezoneList;

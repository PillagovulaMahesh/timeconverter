import React, { useState } from 'react';
import TimezoneList from './components/TimezoneList';
import Slider from './components/Slider';
import DatePicker from './components/DatePicker';
import moment from 'moment-timezone';
import './styles.css';

const App = () => {
  const [timezones, setTimezones] = useState(['UTC', 'Asia/Kolkata']);
  const [currentTime, setCurrentTime] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTimezone = (timezone) => {
    if (!timezones.includes(timezone)) {
      setTimezones([...timezones, timezone]);
    }
  };

  const removeTimezone = (timezone) => {
    setTimezones(timezones.filter((tz) => tz !== timezone));
  };

  const handleTimeChange = (newTime) => {
    setCurrentTime(moment.tz(newTime, 'UTC'));
  };

  return (
    <div className="app">
      <h1>Timezone Converter</h1>
      <Slider currentTime={currentTime} onTimeChange={handleTimeChange} />
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <TimezoneList
        timezones={timezones}
        currentTime={currentTime}
        selectedDate={selectedDate}
        addTimezone={addTimezone}
        removeTimezone={removeTimezone}
      />
    </div>
  );
};

export default App;

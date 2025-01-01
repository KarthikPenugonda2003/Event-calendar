// React.js application for an event calendar with monthly grid view, event management, and editing functionality

import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import './App.css';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', start: '', end: '' });

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const handleDayClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    setShowEventList(true);
  };

  const handleAddEvent = () => {
    if (newEvent.name.trim() && newEvent.start && newEvent.end) {
      setEvents((prev) => [
        ...prev,
        { ...newEvent, date: selectedDate }
      ]);
      setNewEvent({ name: '', start: '', end: '' });
    }
  };

  const handleCloseEventList = () => {
    setShowEventList(false);
    setSelectedDate(null);
  };

  return (
    <div className="app">
      <header>
        <h1>Event Calendar</h1>
        <div className="navigation">
          <button onClick={() => handleMonthChange('prev')}>Previous</button>
          <span>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          <button onClick={() => handleMonthChange('next')}>Next</button>
        </div>
      </header>

      <main>
        <CalendarGrid
          currentDate={currentDate}
          events={events}
          handleDayClick={handleDayClick}
        />

        {showEventList && selectedDate && (
          <EventModal
            selectedDate={selectedDate}
            events={events}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
            handleCloseEventList={handleCloseEventList}
          />
        )}
      </main>
    </div>
  );
}

export default App;

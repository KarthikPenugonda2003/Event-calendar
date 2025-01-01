import React from 'react';

const EventModal = ({
  selectedDate,
  events,
  newEvent,
  setNewEvent,
  handleAddEvent,
  handleCloseEventList,
}) => {
  const dayEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="event-modal">
      <h2>Events on {selectedDate.toDateString()}</h2>
      <div className="event-list">
        {dayEvents.map((event, index) => (
          <div key={index}>
            {event.name} ({event.start} - {event.end})
          </div>
        ))}
      </div>

      <h3>Add New Event</h3>
      <input
        type="text"
        placeholder="Event Name"
        value={newEvent.name}
        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
      />
      <input
        type="time"
        value={newEvent.start}
        onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
      />
      <input
        type="time"
        value={newEvent.end}
        onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
      />
      <button onClick={handleAddEvent}>Add Event</button>
      <button onClick={handleCloseEventList}>Close</button>
    </div>
  );
};

export default EventModal;

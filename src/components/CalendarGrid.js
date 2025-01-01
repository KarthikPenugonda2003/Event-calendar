import React from 'react';

const CalendarGrid = ({ currentDate, events, handleDayClick }) => {
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth(currentDate.getFullYear(), currentDate.getMonth()) }, (_, i) => i + 1);

  return (
    <div className="calendar-grid">
      {days.map((day) => {
        const dayEvents = events.filter(
          (event) => event.date.toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString()
        );
        return (
          <div key={day} className="day-cell" onClick={() => handleDayClick(day)}>
            <div className="date">{day}</div>
            <div className="events">
              {dayEvents.map((event, index) => (
                <div key={index}>
                  {event.name} ({event.start} - {event.end})
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;

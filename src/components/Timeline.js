import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline1">
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <img src={event.image} alt={event.title} />
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

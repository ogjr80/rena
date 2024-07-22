'use client';

import { useSearchParams } from 'next/navigation';
import { fetchEvents } from '../../../lib/fetchEvents';
import { useEffect, useState } from 'react';
import { Event } from '../../types/Event';

export default function EventDetails({params}:{params:any, }) {
  const {eventId} = params; 
  const searchParams = useSearchParams();
  // const eventId = seasrchParams.get('eventId');
  const events: Event[] = fetchEvents();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const eventData = events.find(event => event.id === eventId);
    setEvent(eventData || null);
  }, [eventId]);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div>
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-t-lg" />
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p className="mb-4">{event.description}</p>
      <p className="mb-4 text-gray-600">{new Date(event.date).toLocaleString()}</p>
      <p className="mb-4 text-gray-600">{event.location}</p>
      <p className="mb-4 text-gray-600">Organized by {event.organizer}</p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Tickets</h2>
        {event.tickets.map((ticket, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">{ticket.type}</p>
            <p className="text-gray-600">${ticket.price}</p>
            <p className="text-gray-600">Quantity: {ticket.quantity}</p>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 text-white p-2 rounded">Buy Tickets</button>
    </div>
  );
}

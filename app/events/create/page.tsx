'use client';

import { useRouter } from 'next/navigation';
import EventForm from '../../components/EventForm';
import { fetchEvents } from '../../../lib/fetchEvents';
import { useEffect, useState } from 'react';
import { Event } from '../../types/Event';

export default function CreateEvent() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventData: Event[] = fetchEvents();
    setEvents(eventData);
  }, []);

  const handleCreateEvent = (data: Omit<Event, 'id'>) => {
    const newEvent: Event = { ...data, id: String(events.length + 1) };
    setEvents([...events, newEvent]);
    router.push('/events');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <EventForm onSubmit={handleCreateEvent} />
    </div>
  );
}

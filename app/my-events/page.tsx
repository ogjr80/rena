'use client';

import EventList from '../components/EventList';
import { fetchEvents } from '../../lib/fetchEvents';
import { Event } from '../types/Event';

export default function MyEvents() {
  const events: Event[] = fetchEvents();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Events</h1>
      <EventList events={events} />
    </div>
  );
}

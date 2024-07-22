'use client';

import EventList from '../components/EventList';
import { fetchEvents } from '../../lib/fetchEvents';
import { Event } from '../types/Event';

export default function Events() {
  const events: Event[] = fetchEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

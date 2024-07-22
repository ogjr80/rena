'use client';

import { useState } from 'react';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import { fetchEvents } from '../lib/fetchEvents';
import { Event } from './types/Event';

export default function Home() {
  const [search, setSearch] = useState('');
  const events: Event[] = fetchEvents();

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <EventList events={filteredEvents} />
    </div>
  );
}

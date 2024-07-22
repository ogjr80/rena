import EventCard from './EventCard';

type EventListProps = {
  events: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    organizer: string;
    image: string;
    tickets: { type: string; price: string; quantity: number }[];
  }[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

import Link from 'next/link';

type EventCardProps = {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    organizer: string;
    image: string;
    tickets: { type: string; price: string; quantity: number }[];
  };
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{event.title}</h2>
        <p className="mb-2">{event.description}</p>
        <p className="mb-2 text-gray-600">{new Date(event.date).toLocaleString()}</p>
        <p className="mb-2 text-gray-600">{event.location}</p>
        <p className="mb-2 text-gray-600">Organized by {event.organizer}</p>
        <Link href={`/events/${event.id}`}>
          <p className="text-blue-500 hover:underline">View Event</p>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

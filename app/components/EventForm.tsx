import { useState } from 'react';
import { Event, Ticket } from '../types/Event';

type EventFormProps = {
  onSubmit: (data: Omit<Event, 'id'>) => void;
  event?: Omit<Event, 'id'>;
};

const EventForm: React.FC<EventFormProps> = ({ onSubmit, event }) => {
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [date, setDate] = useState(event?.date || '');
  const [location, setLocation] = useState(event?.location || '');
  const [organizer, setOrganizer] = useState(event?.organizer || '');
  const [image, setImage] = useState(event?.image || '');
  const [tickets, setTickets] = useState<Ticket[]>(event?.tickets || [{ type: '', price: '', quantity: 0 }]);

  const handleTicketChange = (index: number, key: keyof Ticket, value: string) => {
    const newTickets = [...tickets];
    newTickets[index] = { ...newTickets[index], [key]: value };
    setTickets(newTickets);
  };

  const addTicket = () => {
    setTickets([...tickets, { type: '', price: '', quantity: 0 }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, description, date, location, organizer, image, tickets });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2 font-bold">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Date</label>
        <input
          type="datetime-local"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Organizer</label>
        <input
          type="text"
          name="organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Image URL</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold">Tickets</label>
        {tickets.map((ticket, index) => (
          <div key={index} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Type"
              value={ticket.type}
              onChange={(e) => handleTicketChange(index, 'type', e.target.value)}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={ticket.price}
              onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
              className="border p-2 w-full rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={ticket.quantity}
              onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addTicket} className="bg-gray-500 text-white p-2 rounded">Add Ticket</button>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default EventForm;

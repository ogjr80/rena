export type Ticket = {
    type: string;
    price: string;
    quantity: number;
  };
  
  export type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    organizer: string;
    image: string;
    tickets: Ticket[];
  };
  
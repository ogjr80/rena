import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link href="/">
        <span className="text-lg font-bold">Event Platform</span>
      </Link>
      <nav className="flex space-x-4">
        <Link href="/">
          <span className="hover:text-gray-400">Home</span>
        </Link>
        <Link href="/events">
          <span className="hover:text-gray-400">Events</span>
        </Link>
        <Link href="/events/create">
          <span className="hover:text-gray-400">Create Event</span>
        </Link>
        <Link href="/my-events">
          <span className="hover:text-gray-400">My Events</span>
        </Link>
        <Link href="/profile">
          <span className="hover:text-gray-400">Profile</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

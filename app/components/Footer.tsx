import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-gray-400">About</Link>
          <Link href="#" className="hover:text-gray-400">Contact</Link>
          <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-gray-400">Facebook</Link>
          <Link href="#" className="hover:text-gray-400">Twitter</Link>
          <Link href="#" className="hover:text-gray-400">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

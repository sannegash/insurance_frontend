import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">My App</h1>
      <ul className="flex gap-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


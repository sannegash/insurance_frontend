import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
          <p className="text-lg mb-6">Sign up to explore our features!</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

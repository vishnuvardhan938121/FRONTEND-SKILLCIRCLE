import React, { useEffect, useState } from 'react';
import landing from '../skill-circle-landing.jpg'
const Home = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
    {/* Navbar */}
    <nav className={`fixed w-full transition-colors duration-300 ${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'} shadow-md`}>
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
  <div className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>MyLogo</div>
  <div>
    <a href="#" className={`mx-4 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-400'}`}>Home</a>
    <a href="#" className={`mx-4 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-400'}`}>About</a>
    <a href="#" className={`mx-4 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-400'}`}>Contact</a>
  </div>
</div>
</nav>

    {/* Landing Section */}
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${landing})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Skill Circle</h1>
        <p className="text-lg md:text-2xl mb-6">Your Service Hub , your Way.</p>
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>
    </div>

    {/* Dummy Content to Enable Scrolling */}
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <h2 className="text-3xl">Scroll Down to See the Effect</h2>
    </div>
  </div>



  );
};

export default Home;
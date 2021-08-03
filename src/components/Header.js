import React from 'react';

const Header = () => {
  return (
    <header 
      className="bg-gradient-to-r from-red-600 via-purple-500 to-green-400 fixed w-full
        h-12 flex items-center pl-4 z-10 shadow-md">
      <h1 className="text-xl font-semibold text-white tracking-wide">Twin Peaks Quotes</h1>
    </header>
  )
};

export default Header;
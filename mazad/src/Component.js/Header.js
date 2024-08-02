


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold">Mazad</div>
      <div className="flex items-center space-x-8">
        <select className="p-2 border rounded">
          <option>Category</option>
        </select>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="p-2 border rounded" />
          <button className="px-4 py-2 bg-[#A5CAE4] text-white rounded hover:bg-blue-700">Search</button>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/aboutUs">
            <button className="px-4 py-2 bg-[#A5CAE4] text-white hover:text-blue-500 pr-5">About Us</button>
           </Link>

          <Link to="/authPage">
            <button className="px-4 py-2 bg-[#A5CAE4] text-white rounded hover:bg-blue-700">SIGN IN</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

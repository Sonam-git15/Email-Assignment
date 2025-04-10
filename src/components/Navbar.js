import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex justify-between">
    <div className="text-xl font-bold">CommApp</div>
    <div>
      <Link className="mx-2" to="/dashboard">Dashboard</Link>
      <Link className="mx-2" to="/compose">Compose</Link>
      <Link className="mx-2" to="/">Logout</Link>
    </div>
  </nav>
);

export default Navbar;
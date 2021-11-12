import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">ShakesJeer</Link>
        <Link to="/About">About</Link>
        <Link to="/Event">Event</Link>
      </div>
    </nav>
  );
};

export default Navbar;

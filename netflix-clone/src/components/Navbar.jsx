import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
        <li>My List</li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
//import "./style.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Clicky Game
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
                Clicky Game
            </li>
            <li className="nav-item">
                Click and image to begin!
            </li>
            <li className="nav-item">
                Score: 0 | Top Score: 0 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
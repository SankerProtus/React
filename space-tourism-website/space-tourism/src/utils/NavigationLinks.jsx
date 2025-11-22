import React from "react";
import '../App.css';

const NavigationLinks = ({ selectedDestination, onDestinationChange }) => {
  const destinations = [
    { id: 'moon', name: 'Moon' },
    { id: 'mars', name: 'Mars' },
    { id: 'europa', name: 'Europa' },
    { id: 'titan', name: 'Titan' }
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-links">
        {destinations.map((dest) => (
          <li key={dest.id}>
            <button
              className={`nav-link ${selectedDestination === dest.id ? 'active' : ''}`}
              onClick={() => onDestinationChange(dest.id)}
            >
              {dest.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;

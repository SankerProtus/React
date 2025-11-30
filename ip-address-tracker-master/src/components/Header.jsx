import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ handleChange }) => {
  return (
    <header className="header">
      <h1 className="header-title">IP Address Tracker</h1>
      <SearchBar handleChange={handleChange} />
    </header>
  )
}

export default Header
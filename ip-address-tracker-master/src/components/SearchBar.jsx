import { useState } from 'react';
import searchIcon from '../assets/images/icon-arrow.svg';

const SearchBar = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() !== '') {
      handleChange(inputValue);
      setTimeout(() => setInputValue(''), 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if(inputValue.trim() !== '') {
        handleChange(inputValue);
        setTimeout(() => setInputValue(''), 500);
      }
    }
  };

  return (
    <div className='search-bar'>
      <input 
        type="text" 
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleSubmit}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  )
}

export default SearchBar
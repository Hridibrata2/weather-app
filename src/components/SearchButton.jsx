import React, { useState, useContext } from 'react';
import './SearchButton.css';
import { WeatherContext } from './WeatherContext';

const SearchButton = () => {
  const [city, setCity] = useState('');
  const { onSearch } = useContext(WeatherContext);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (city.trim() === '') {
        alert("Please enter a city name");
      } else {
        onSearch(city.trim());
      }
    }
  };

  return (
    <div className='input-container'>
      <input
        type="text"
        placeholder="Search for cities"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="Search for a city"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchButton;
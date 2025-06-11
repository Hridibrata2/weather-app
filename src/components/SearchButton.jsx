import React, { useState } from 'react'
import './SearchButton.css'; 

const SearchButton = ({onSearch}) => {

const [city, setCity] = useState('');

const handleKeyPress = (e) => {
  if (e.key === 'Enter' && city.trim() !== '') {
    onSearch(city.trim());
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
          />
    </div>
  )
}

export default SearchButton
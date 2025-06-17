import React from 'react'
import './PresentWeather.css';
import clear_Icon from '../assets/clear.png';
const PresentWeather = () => {
  return (
    <div className='weather-icons-container'>
        <div className='weather-icon-sunny'>
<img className='weather-icon' src={clear_Icon} alt="Sunny" />
        </div>
        <div>
            <p className='city-name'>Madrid</p>
            <p className='rain-chance'>Chance of rain: 0%</p>
            <p className='temperature-text'>25°</p>
        </div>
        </div>
  )
}

export default PresentWeather;
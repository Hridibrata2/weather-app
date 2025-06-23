import React, { useContext } from 'react'
import './PresentWeather.css';
import { WeatherContext } from './WeatherContext';


import clear_Icon from '../assets/clear.png';
import cloud_Icon from '../assets/cloud.png';
import rain_Icon from '../assets/rain.png';
import thunder_Icon from '../assets/thunderstorm.png'; 
import drizzle_Icon from '../assets/drizzle.png';
import snow_Icon from '../assets/snow.png';

const PresentWeather = () => {
  const { weatherData } = useContext(WeatherContext);

if (!weatherData) {
  return <p className='no-weather-data'>No weather data is found...</p>;
}

const weatherMain = weatherData.weather[0].main;
const city = weatherData.name;
const tempC = Math.round(weatherData.main.temp - 273.15);

const getIcon = (condition) => {
  switch (condition) {
    case 'Clear': return clear_Icon;
    case 'Clouds': return cloud_Icon;
    case 'Rain': return rain_Icon;
    case 'Drizzle': return drizzle_Icon;
    case 'Thunderstorm': return thunder_Icon;
    case 'Snow': return snow_Icon;
    default: return clear_Icon;
  }
};

const icon = getIcon(weatherMain);

  return (
    <div className='weather-icons-container'>
        <div className='weather-icon-sunny'>
<img className='weather-icon' src={icon} alt={weatherMain} />
        </div>
        <div>
            <p className='city-name'>{city}</p>
            {/* <p className='rain-chance'>Chance of rain: {rainChance}</p> */}
            <p className='temperature-text'>{tempC}°</p>
        </div>
        </div>
  )
}

export default PresentWeather;
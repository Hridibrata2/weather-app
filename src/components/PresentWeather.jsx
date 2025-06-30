import React, { useContext } from 'react';
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

  const city = weatherData.location.name;
  const tempC = Math.round(weatherData.current.temp_c);
  const condition = weatherData.current.condition.text;

  const getIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear': return clear_Icon;
      case 'sunny': return clear_Icon;
      case 'cloudy': return cloud_Icon;
      case 'overcast': return cloud_Icon;
      case 'partly cloudy': return cloud_Icon;
      case 'rain': return rain_Icon;
      case 'light rain': return rain_Icon;
      case 'moderate rain': return rain_Icon;
      case 'drizzle': return drizzle_Icon;
      case 'thunderstorm': return thunder_Icon;
      case 'snow': return snow_Icon;
      default: return clear_Icon;
    }
  };

  const icon = getIcon(condition);

  return (
    <div className='weather-icons-container'>
      <div className='weather-icon-sunny'>
        <img className='weather-icon' src={icon} alt={condition} />
      </div>
      <div>
        <p className='city-name'>{city}</p>
        <p className='temperature-text'>{tempC}°</p>
      </div>
    </div>
  );
};

export default PresentWeather;

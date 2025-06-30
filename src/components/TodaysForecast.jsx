import React, { useContext } from 'react';
import './TodaysForecast.css';
import { WeatherContext } from './WeatherContext';

import clear_Icon from '../assets/clear.png';
import cloud_Icon from '../assets/cloud.png';
import rain_Icon from '../assets/rain.png';
import thunder_Icon from '../assets/thunderstorm.png';
import drizzle_Icon from '../assets/drizzle.png';

const TodaysForecast = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <p className="unavailable-weather-data">No forecast data available...</p>;
  }

 
  const hours = weatherData.forecast.forecastday[0].hour;


  const targetTimes = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];


  const forecast = targetTimes.map((time) =>
    hours.find((h) => h.time.includes(time))
  );

  const getIcon = (condition) => {
    const text = condition.toLowerCase();
    if (text.includes("clear") || text.includes("sunny")) return clear_Icon;
    if (text.includes("cloud")) return cloud_Icon;
    if (text.includes("rain")) return rain_Icon;
    if (text.includes("drizzle")) return drizzle_Icon;
    if (text.includes("thunder")) return thunder_Icon;
    return clear_Icon;
  };


  const temps = forecast.map((h) => `${Math.round(h.temp_c)}°C`);
  const icons = forecast.map((h) => getIcon(h.condition.text));

  return (
    <div className="todays-forecast">
      <p className='forecast-header'>TODAY'S FORECAST</p>

      <p className='forecast-time'>6:00 AM</p>
      <img className='clear-weather-icon' src={icons[0]} alt="weather" />
      <p className='forecast-temp'>{temps[0]}</p>
      <hr className='line' />

      <p className='forecast-time-2'>9:00 AM</p>
      <img className='sunny-weather-icon' src={icons[1]} alt="weather" />
      <p className='forecast-temp-2'>{temps[1]}</p>
      <hr className='line-2'/>

      <p className='forecast-time-3'>12:00 PM</p>
      <img className='cloudy-weather-icon' src={icons[2]} alt="weather" />
      <p className='forecast-temp-3'>{temps[2]}</p>
      <hr className='line-3'/>

      <p className='forecast-time-4'>3:00 PM</p>
      <img className='cloud-weather-icon-2' src={icons[3]} alt="weather" />
      <p className='forecast-temp-4'>{temps[3]}</p>
      <hr className='line-4'/>

      <p className='forecast-time-5'>6:00 PM</p>
      <img className='rain-weather-icon' src={icons[4]} alt="weather" />
      <p className='forecast-temp-5'>{temps[4]}</p>
      <hr className='line-5'/>

      <p className='forecast-time-6'>9:00 PM</p>
      <img className='thunder-weather-icon' src={icons[5]} alt="weather" />
      <p className='forecast-temp-6'>{temps[5]}</p>
    </div>
  );
};

export default TodaysForecast;

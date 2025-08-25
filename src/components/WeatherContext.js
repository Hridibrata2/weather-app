import React, { useState, createContext } from 'react';
import axios from 'axios';
import { saveQuery } from '../database/indexeddb';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const onSearch = async (cityName) => {
    if (!cityName) return; 

    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      console.log("Weather API Key:", apiKey); 
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7&aqi=yes`
      );

      setWeatherData(response.data);
      saveQuery(cityName); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <WeatherContext.Provider value={{ onSearch, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

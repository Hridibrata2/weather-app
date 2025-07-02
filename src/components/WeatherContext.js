import React, { useState, createContext } from 'react'
import axios from 'axios'

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null)

    const onSearch = async (cityName) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&days=7&aqi=yes`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <WeatherContext.Provider value={{ onSearch, weatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}
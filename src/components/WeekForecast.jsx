import React, { useContext } from 'react'
import { WeatherContext } from './WeatherContext';
import './WeekForecast.css';
import { FaSun } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const WeekForecast = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <p className="void-weather-data">No forecast data available...</p>;
  }

  const forecast = weatherData.forecast.forecastday;

  const getIcon = (condition) => {
    const cond = condition.toLowerCase();
    if (cond.includes('sunny') || cond.includes('clear')) return <FaSun className='icon' size={30} />;
    if (cond.includes('cloud')) return <FaCloud className='icon' size={30} />;
    if (cond.includes('rain')) return <FaCloud className='icon' size={30} />;
    if (cond.includes('thunder')) return <AiFillThunderbolt className='icon' size={30} />;
    return <FaSun className='icon' size={30} />;
  }

  const day1 = forecast[0];
  const day2 = forecast[1];
  const day3 = forecast[2];
  const day4 = forecast[3];
  const day5 = forecast[4];
  const day6 = forecast[5];
  const day7 = forecast[6];

  return (
    <div className="weekly-forecast">
      <p className="weekly-forecast-header">7-DAY FORECAST</p>

      <div className="forecast-today">
        <p className="day">Today</p>
        {getIcon(day1.day.condition.text)}
        <p className="condition">{day1.day.condition.text}</p>
        <p className="temp1">{Math.round(day1.day.maxtemp_c)}/{Math.round(day1.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day">
        <p className="day">Tue</p>
        {getIcon(day2.day.condition.text)}
        <p className="condition">{day2.day.condition.text}</p>
        <p className="temp2">{Math.round(day2.day.maxtemp_c)}/{Math.round(day2.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day-2">
        <p className="day">Wed</p>
        {getIcon(day3.day.condition.text)}
        <p className="condition">{day3.day.condition.text}</p>
        <p className="temp3">{Math.round(day3.day.maxtemp_c)}/{Math.round(day3.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day-3">
        <p className="day">Thu</p>
        {getIcon(day4.day.condition.text)}
        <p className="condition">{day4.day.condition.text}</p>
        <p className="temp4">{Math.round(day4.day.maxtemp_c)}/{Math.round(day4.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day-4">
        <p className="day">Fri</p>
        {getIcon(day5.day.condition.text)}
        <p className="condition">{day5.day.condition.text}</p>
        <p className="temp5">{Math.round(day5.day.maxtemp_c)}/{Math.round(day5.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day-5">
        <p className="day">Sat</p>
        {getIcon(day6.day.condition.text)}
        <p className="condition">{day6.day.condition.text}</p>
        <p className="temp6">{Math.round(day6.day.maxtemp_c)}/{Math.round(day6.day.mintemp_c)}</p>
      </div>

      <div className="forecast-day-6">
        <p className="day">Sun</p>
        {getIcon(day7.day.condition.text)}
        <p className="condition">{day7.day.condition.text}</p>
        <p className="temp7">{Math.round(day7.day.maxtemp_c)}/{Math.round(day7.day.mintemp_c)}</p>
      </div>
    </div>
  )
}

export default WeekForecast;

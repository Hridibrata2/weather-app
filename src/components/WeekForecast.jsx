import React from 'react'
import './WeekForecast.css';
import { FaSun } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

const WeekForecast = () => {
  return (
    <div className="weekly-forecast">
  <p className="weekly-forecast-header">7-DAY FORECAST</p>
  <div className="forecast-today">
    <p className="day">Today</p>
    <FaSun className="icon" size={30} />
    <p className="condition">Sunny</p>
    <p className="temp1">30/25</p>
  </div>
  <div className="forecast-day">
    <p className="day">Tue</p>
    <FaSun className="icon" size={30} />
    <p className="condition">Sunny</p>
    <p className="temp2">37/21</p>
  </div>
  <div className="forecast-day-2">
    <p className="day">Wed</p>
    <FaSun className="icon" size={30} />
    <p className="condition">Sunny</p>
    <p className="temp3">35/22</p>
    </div>
  <div className="forecast-day-3">
    <p className="day">Thu</p>
    <FaSun className="icon" size={30} />
    <p className="condition">Sunny</p>
    <p className="temp4">37/21</p>
  </div>
  <div className="forecast-day-4">
    <p className="day">Fri</p>
    <FaCloud className="icon" size={30} />
    <p className="condition">Cloudy</p>
    <p className="temp5">35/22</p>
    </div>
  <div className="forecast-day-5">
    <p className="day">Sat</p>
    <FaCloud className="icon" size={30} />
    <p className="condition">Cloudy</p>
    <p className="temp6">37/21</p>
    </div>
  <div className="forecast-day-6">
    <p className="day">Sun</p>
    <AiFillThunderbolt className="icon" size={30} />
    <p className="condition">Rainy</p>
    <p className="temp7">35/22</p>
    </div>
</div>
  )
}

export default WeekForecast
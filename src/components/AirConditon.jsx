import React, {useContext} from 'react'
import { WeatherContext } from './WeatherContext';
import './AirConditon.css';
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { IoWaterSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa";


const AirConditon = () => {

const { weatherData } = useContext(WeatherContext);

const humidityMain = weatherData?.main?.humidity ?? 'N/A';
const realFeel = Math.round(weatherData?.main?.feels_like - 273.15) ?? 'N/A';
const windSpeed = weatherData?.wind?.speed ?? 'N/A';

  return (
    <div className='air-condition'>
      <p className='condition-header'>AIR CONDITION</p>
      <button className='condition-button'>See more</button>
      <div className='condition-content'>
        <div className='condition-item'>
          <CiTempHigh className='condition-temp-icon' size={30} />
          <p className='condition-temp-text'>Real Feel</p>
          <p className='condition-temp-value'>{realFeel}°C</p>
          <LuWind className='condition-wind-icon' size={30} />
          <p className='condition-wind-text'>Wind</p>
          <p className='condition-wind-value'>{windSpeed}km/h</p>
          <IoWaterSharp className='condition-water-icon' size={30} />
          <p className='condition-humidity-text'>Humidity</p>
          <p className='condition-humidity-value'>{humidityMain}%</p>
          <FaSun className='condition-sun-icon' size={30} />
          <p className='condition-sun-text'>UV Index</p>
          <p className='condition-sun-value'>3</p>
        </div>
      </div> 
    </div>
  )
}

export default AirConditon
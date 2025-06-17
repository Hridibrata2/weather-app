import React from 'react'
import './AirConditon.css';
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { IoWaterSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa";


const AirConditon = () => {
  return (
    <div className='air-condition'>
      <p className='condition-header'>AIR CONDITION</p>
      <button className='condition-button'>See more</button>
      <div className='condition-content'>
        <div className='condition-item'>
          <CiTempHigh className='condition-temp-icon' size={30} />
          <p className='condition-temp-text'>Real Feel</p>
          <p className='condition-temp-value'>30°</p>
          <LuWind className='condition-wind-icon' size={30} />
          <p className='condition-wind-text'>Wind</p>
          <p className='condition-wind-value'>10km/h</p>
          <IoWaterSharp className='condition-water-icon' size={30} />
          <p className='condition-humidity-text'>Humidity</p>
          <p className='condition-humidity-value'>60%</p>
          <FaSun className='condition-sun-icon' size={30} />
          <p className='condition-sun-text'>UV Index</p>
          <p className='condition-sun-value'>3</p>
        </div>
      </div> 
    </div>
  )
}

export default AirConditon
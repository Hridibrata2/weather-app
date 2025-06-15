import React from 'react'
import './TodaysForecast.css';
import clear_Icon from '../assets/clear.png';
import cloud_Icon from '../assets/cloud.png';
import rain_Icon from '../assets/rain.png';
import snow_Icon from '../assets/snow.png';
import thunder_Icon from '../assets/thunderstorm.png'; 


const TodaysForecast = () => {
  return (
    <div className="todays-forecast">
        <div className="forecast-text">
          <p className='forecast-header'>TODAY'S FORECAST</p>
          <div className='forecast-icons'>
            
          </div>
        </div>
    </div>
  )
}

export default TodaysForecast
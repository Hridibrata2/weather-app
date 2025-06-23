import React from 'react'
import './TodaysForecast.css';
import clear_Icon from '../assets/clear.png';
import cloud_Icon from '../assets/cloud.png';
import rain_Icon from '../assets/rain.png';
import thunder_Icon from '../assets/thunderstorm.png'; 
import drizzle_Icon from '../assets/drizzle.png';



const TodaysForecast = () => {
  return (
    <div className="todays-forecast">
          <p className='forecast-header'>TODAY'S FORECAST</p>
            <p className='forecast-time'>6:00 AM</p>
            <img className='clear-weather-icon' src={clear_Icon} alt="sunny" />
            <p className='forecast-temp'>25°C</p>
            <hr className='line' />
            <p className='forecast-time-2'>9:00 AM</p>
            <img className='sunny-weather-icon' src={clear_Icon} alt="clear" />
            <p className='forecast-temp-2'>29°C</p>
            <hr className='line-2'/>
            <p className='forecast-time-3'>12:00 PM</p>
            <img className='cloudy-weather-icon' src={cloud_Icon} alt="cloudy" />
            <p className='forecast-temp-3'>22°C</p>
            <hr className='line-3'/>
            <p className='forecast-time-4'>3:00 PM</p>
            <img className='cloud-weather-icon-2' src={cloud_Icon} alt="cloudy" />
            <p className='forecast-temp-4'>20°C</p>
            <hr className='line-4'/>
            <p className='forecast-time-5'>6:00 PM</p>
            <img className='rain-weather-icon' src={rain_Icon} alt="rainy" />
            <p className='forecast-temp-5'>18°C</p> 
            <hr className='line-5'/>
            <p className='forecast-time-6'>9:00 PM</p>
            <img className='thunder-weather-icon' src={thunder_Icon} alt="thunder" />
            <p className='forecast-temp-6'>16°C</p>
          </div>

  )
}

export default TodaysForecast
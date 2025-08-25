import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IconColumn.css'; 
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import wind_Icon from '../assets/wind.png';


const IconColumn = () => {
  const navigate = useNavigate();
const handleCityClick = () => {
  navigate('/cities');
};

  return (
    <div className='container'>
        <div className='wind-icon'>
            <img src={wind_Icon} alt="Wind Icon" />
        </div>
        <div className='other-icons'>
            <TiWeatherPartlySunny className='sunny-cloud-icon' size={20} color='white' />
            <p className='weather-text'>Weather</p>
            <FaCity className='city-icon' size={20} color='white' onClick={handleCityClick} />
            <p className='city-text'>Cities</p>
            <IoMapSharp className='map-icon' size={20} color='white'/>
            <p className='map-text'>Map</p>
            <GiSettingsKnobs className='settings-icon' size={20} color='white'/>
            <p className='settings-text'>Settings</p> 
            </div>
    </div>
  );
};

export default IconColumn;
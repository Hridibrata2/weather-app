 import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SearchButton from './components/SearchButton';
import IconColumn from './components/IconColumn';
import PresentWeather from './components/PresentWeather';
import TodaysForecast from './components/TodaysForecast';
import WeekForecast from './components/WeekForecast';
import AirConditon from './components/AirConditon';
import Cities from './components/Cities';
function App() {

const location = useLocation();

const citiesPage = location.pathname === '/cities';

  return (
  <div className="app-container">
    {citiesPage ?  (
      <Routes>
        <Route path="/cities" element={<Cities />} />
      </Routes>
    ) : (
<>
<SearchButton />
<PresentWeather />
<TodaysForecast />
<AirConditon />
<WeekForecast />
<IconColumn />
</>
  )}
  </div>
  );  
}

export default App;

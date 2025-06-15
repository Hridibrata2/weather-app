import './App.css';
import React from 'react';
import SearchButton from './components/SearchButton';
import IconColumn from './components/IconColumn';
import PresentWeather from './components/PresentWeather';
import TodaysForecast from './components/TodaysForecast';
function App() {
  return (
    <div className="app-container">
  <SearchButton />
  <PresentWeather />
<TodaysForecast />
  <IconColumn />
    </div>
  );
}

export default App;

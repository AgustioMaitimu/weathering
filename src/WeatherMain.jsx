import React from 'react';
import './WeatherMain.css';

export default function WeatherMain(props) {
  function fahrToCels(fahr) {
    const cels = ((fahr - 32) * 5) / 9;
    return Math.round(cels * 10) / 10;
  }

  return (
    <div className="weather--main--container">
      <h1 className="main--degree">
        {Math.round(fahrToCels(props.data.days[0].temp))}
        <span className="main--celsius">°C</span>
      </h1>
      <div className="main--condition">
        <h2>{props.data.days[0].conditions}</h2>
      </div>
    </div>
  );
}

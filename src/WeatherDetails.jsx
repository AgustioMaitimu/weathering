import React from 'react';
import './WeatherDetails.css';

export default function WeatherDetails(props) {
  function fahrToCels(fahr) {
    const cels = ((fahr - 32) * 5) / 9;
    return Math.round(cels * 10) / 10;
  }
  return (
    <div className="details--container">
      <div className="feels--like">
        <p>
          {Math.round(fahrToCels(props.data.days[0].feelslike))}
          <span className="details--celsius">°C</span>
        </p>
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        <p>{Math.round(props.data.days[0].humidity)}%</p>
        <p>Humidity</p>
      </div>
      <div className="visibility">
        <p>{Math.round(props.data.days[0].visibility * 1.6)}km</p>
        <p>Visibility</p>
      </div>
      <div className="cloud--cover">
        <p>{Math.round(props.data.days[0].cloudcover)}%</p>
        <p>Cloud Cover</p>
      </div>
    </div>
  );
}

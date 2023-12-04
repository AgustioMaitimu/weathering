import React from 'react';
import './WeatherForecast.css';

export default function WeatherForecast(props) {
  function getDayName(day) {
    const datePlaceholder = new Date(day).getDay();
    // return typeof datePlaceholder.toString();
    switch (datePlaceholder.toString()) {
      case '0':
        return 'Sunday';
      case '1':
        return 'Monday';
      case '2':
        return 'Tuesday';
      case '3':
        return 'Wednesday';
      case '4':
        return 'Thursday';
      case '5':
        return 'Friday';
      case '6':
        return 'Saturday';
    }
  }
  function fahrToCels(fahr) {
    const cels = ((fahr - 32) * 5) / 9;
    return Math.round(cels * 10) / 10;
  }
  const forecasts = props.data.days.map((day) => {
    return (
      <div className="forecasts--comp" key={day.datetime}>
        <div className="forecast--left">
          <p>{day.datetime.slice(5)}</p>
          <p>{getDayName(day.datetime)}</p>
        </div>
        <div className="forecast--right">
          <img src={`../public/icons/${day.icon}.svg`} />
          <p>{Math.round(fahrToCels(day.tempmax))}</p>
          <p>{Math.round(fahrToCels(day.tempmin))}</p>
        </div>
      </div>
    );
  });
  return <div className="forecast--container">{forecasts}</div>;
}

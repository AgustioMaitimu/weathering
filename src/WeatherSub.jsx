import React from 'react';
import './WeatherSub.css';

export default function WeatherHourly(props) {
  function fahrToCels(fahr) {
    const cels = ((fahr - 32) * 5) / 9;
    return Math.round(cels * 10) / 10;
  }
  return (
    <div className="sub--container">
      <h4 className="sub--minmax">
        {Math.round(fahrToCels(props.data.days[0].tempmax))}°C /{' '}
        {Math.round(fahrToCels(props.data.days[0].tempmin))}°C
      </h4>
      <h4 className="sub--location">{props.data.resolvedAddress}</h4>
    </div>
  );
}

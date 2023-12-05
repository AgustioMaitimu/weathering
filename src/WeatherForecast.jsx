import React from 'react';
import clearDay from '../public/icons/clear-day.svg';
import showersDay from '../public/icons/showers-day.svg';
import clearNight from '../public/icons/clear-night.svg';
import showersNight from '../public/icons/showers-night.svg';
import cloudy from '../public/icons/cloudy.svg';
import sleet from '../public/icons/sleet.svg';
import fog from '../public/icons/fog.svg';
import snowShowersDay from '../public/icons/snow-showers-day.svg';
import hail from '../public/icons/hail.svg';
import snowShowersNight from '../public/icons/snow-showers-night.svg';
import partlyCloudyDay from '../public/icons/partly-cloudy-day.svg';
import snow from '../public/icons/snow.svg';
import partlyCloudyNight from '../public/icons/partly-cloudy-night.svg';
import thunderRain from '../public/icons/thunder-rain.svg';
import rainSnowShowersDay from '../public/icons/rain-snow-showers-day.svg';
import thunderShowersDay from '../public/icons/thunder-showers-day.svg';
import rainSnowShowersNight from '../public/icons/rain-snow-showers-night.svg';
import thunderShowersNight from '../public/icons/thunder-showers-night.svg';
import rainSnow from '../public/icons/rain-snow.svg';
import thunder from '../public/icons/thunder.svg';
import rain from '../public/icons/rain.svg';
import wind from '../public/icons/wind.svg';
import './WeatherForecast.css';

export default function WeatherForecast(props) {
  function getDayName(day) {
    const datePlaceholder = new Date(day).getDay();
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
  function getWeatherIcon(icon) {
    switch (icon) {
      case 'clear-day':
        return clearDay;
      case 'showers-day':
        return showersDay;
      case 'clear-night':
        return clearNight;
      case 'showers-night':
        return showersNight;
      case 'cloudy':
        return cloudy;
      case 'sleet':
        return sleet;
      case 'fog':
        return fog;
      case 'snow-showers-day':
        return snowShowersDay;
      case 'hail':
        return hail;
      case 'snow-showers-night':
        return snowShowersNight;
      case 'partly-cloudy-day':
        return partlyCloudyDay;
      case 'snow':
        return snow;
      case 'partly-cloudy-night':
        return partlyCloudyNight;
      case 'thunder-rain':
        return thunderRain;
      case 'rain-snow-showers-day':
        return rainSnowShowersDay;
      case 'thunder-showers-day':
        return thunderShowersDay;
      case 'rain-snow-showers-night':
        return rainSnowShowersNight;
      case 'thunder-showers-night':
        return thunderShowersNight;
      case 'rain-snow':
        return rainSnow;
      case 'thunder':
        return thunder;
      case 'rain':
        return rain;
      case 'wind':
        return wind;
      default:
        // Handle default case or return a default icon
        return defaultIcon;
    }
  }

  const forecasts = props.data.days.map((day) => {
    return (
      <div className="forecasts--comp" key={day.datetime}>
        <div className="forecast--left">
          <p>{day.datetime.slice(5)}</p>
          <p>{getDayName(day.datetime)}</p>
        </div>
        <div className="forecast--right">
          <img src={getWeatherIcon(day.icon)} />
          <p>{Math.round(fahrToCels(day.tempmax))}°C</p>
          <p>{Math.round(fahrToCels(day.tempmin))}°C</p>
        </div>
      </div>
    );
  });
  return <div className="forecast--container">{forecasts}</div>;
}

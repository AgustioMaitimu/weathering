import React from 'react';
import Header from './Header';
import WeatherMain from './WeatherMain';
import WeatherSub from './WeatherSub';
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import './App.css';

export default function App() {
  const [cityData, setCityData] = React.useState();

  console.log('rendered');

  function pullData(data) {
    setCityData(data);
  }

  React.useEffect(() => {
    console.log(cityData);
  }, [cityData]);

  return (
    <div className="app--comp">
      <Header pullData={pullData} />
      {cityData && <WeatherMain data={cityData} />}
      {cityData && <WeatherSub data={cityData} />}
      <div className="app--details--container">
        {cityData && <WeatherDetails data={cityData} />}
        {cityData && <WeatherForecast data={cityData} />}
      </div>
    </div>
  );
}

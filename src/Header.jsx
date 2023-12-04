import React from 'react';
import SearchPNG from '../public/search.png';
import './Header.css';

export default function Header(props) {
  const [prevCity, setPrevCity] = React.useState();
  const [city, setCity] = React.useState('');

  function handleChange(event) {
    setCity(event.target.value.toUpperCase());
  }

  async function handleSearch(event) {
    event.preventDefault();
    if (city !== prevCity) {
      setPrevCity(city);
      const cityData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${
          new Date().toISOString().split('T')[0]
        }/${
          new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0]
        }?key=EVG865S6DZ6MZ7BSH7VNQJMV7`,
      );
      const processedCityData = await cityData.json();
      props.pullData(processedCityData);
    }
    setCity('');
  }

  return (
    <div className="header--comp">
      <h3 className="header--title">Weathering</h3>
      <form className="header--search--container">
        <input
          type="text"
          name="city"
          className="header--input"
          onChange={handleChange}
          value={city}
          placeholder="Enter Location"
        ></input>
        <button className="header--search" onClick={handleSearch}>
          <img src={SearchPNG} />
        </button>
      </form>
    </div>
  );
}

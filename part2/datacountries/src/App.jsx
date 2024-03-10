import React, { useState } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: country.capital,
          appid: apiKey,
          units: 'metric' 
        }
      });
      setWeatherData(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error fetching weather data');
      console.error('Error fetching weather data:', error);
    }
  };

  React.useEffect(() => {
    if (country.capital) {
      fetchWeatherData();
    }
  }, [country.capital]); 

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} sq km</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      {weatherData && (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
    </div>
  );
};

const CountryListItem = ({ country, handleClick }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => handleClick(country)}>Show</button>
    </li>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchCountries = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
      setErrorMessage('');
      setCountries(response.data);
      setSelectedCountry(null);
    } catch (error) {
      setErrorMessage('Error fetching data. Please try again later.');
      setCountries([]);
      setSelectedCountry(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCountries();
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Information</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {countries.length > 10 && <p>Too many matches. Please specify more...</p>}
      {countries.length <= 10 && countries.length > 1 && (
        <ul>
          {countries.map((country) => (
            <CountryListItem key={country.name.common} country={country} handleClick={handleCountryClick} />
          ))}
        </ul>
      )}
      {countries.length === 1 && <Country country={countries[0]} />}
      {selectedCountry && <Country country={selectedCountry} />}
    </div>
  );
};

export default App;

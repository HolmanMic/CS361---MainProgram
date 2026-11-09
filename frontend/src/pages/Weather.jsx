import { useState, useEffect } from "react";
import { getWeather } from "../services/api";
import WeatherCard from "../components/WeatherCard";
import '../styles/Global.css';
import '../styles/Weather.css';


function Weather() {
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);


  const handleSearch = async () => {

    if (!city || !month || !country) {
      alert("Please enter a city, month, and country.");
      return;
    }

    try {
      const data = await getWeather(city, month, country);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h2>Weather Information</h2>

      <div className="search-section">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="">Select Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <button onClick={handleSearch}>
        Search
      </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
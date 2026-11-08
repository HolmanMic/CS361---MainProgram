import { useState, useEffect } from "react";
import { getWeather } from "../services/api";
import WeatherCard from "../components/WeatherCard";
import { useLocation } from "react-router-dom";
import '../styles/Global.css';
import '../styles/Weather.css';


function Weather() {
  const location = useLocation();
  const [city, setCity] = useState(location.state?.city || "");
  const [month, setMonth] = useState(location.state?.month || "");
  const [country, setCountry] = useState(location.state?.country || "");
  const [weather, setWeather] = useState(null);


  const handleSearch = async () => {

    useEffect(() => {
      if (city && month && country) {
        handleSearch();
      }
    }, [city, month, country]);

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

  useEffect(() => {
    if (city && month && country) {
      handleSearch();
    }
  }, [city, month, country]);

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
        placeholder="Enter month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
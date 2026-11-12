import { useState, useEffect } from "react";
import { getWeather, addFavorite, removeFavorite, getFavorites } from "../services/api";
import WeatherCard from "../components/WeatherCard";
import '../styles/Global.css';
import '../styles/Weather.css';


function Weather() {
  const [city, setCity] = useState("");
  const [month, setMonth] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);


  const handleSearch = async () => {

    if (!city || !month || !country) {
      alert("Please enter a city, month, and country.");
      return;
    }

    try {
      const data = await getWeather(city, country, month);
      if (data.error) {
        alert(data.error);
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

    async function saveFavorite() {
      try {
        const data = await addFavorite(
          weather.city, weather.country);
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function deleteFavorite(city, country) {
      try {
        const data = await removeFavorite(city, country);
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchFavorites() {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchFavorites();
    }, []);

  return (
    <div className="page-container">
      <h2>Weather Information</h2>
      <p className="weather-instruction">
        Enter a city, country, and month to view historical weather information.
      </p>
      <p className="weather-disclaimer">
        Note: Weather information is based on historical data and may not reflect current or future conditions.
      </p>

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

      {weather && (
        <button onClick={saveFavorite}>
        Add to Favorites
      </button>
      )}

      <div className="favorites-section">
        <h3>Favorites</h3>

        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.city}, {favorite.country}

              <button className="remove-button"
                onClick={() =>
                  deleteFavorite(
                    favorite.city,
                    favorite.country
                  )
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Weather;
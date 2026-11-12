import { useState, useEffect } from "react";
import { getBasics, addFavorite, removeFavorite, getFavorites } from "../services/api";
import BasicsCard from "../components/BasicsCard";
import '../styles/Global.css';
import '../styles/Basics.css';  



function Basics() {
  const [country, setCountry] = useState("");
  const [basics, setBasics] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    if (!country) {
      alert("Please enter a country.");
      return;
    }

    try {
      const data = await getBasics(country);
      setBasics(data);
    } catch (error) {
      console.error(error);
    }
  };

  async function saveFavorite() {
    try {
      const data = await addFavorite(country);
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteFavorite(country) {
    try {
      const data = await removeFavorite(country);
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
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="page-container">
      <h2>Travel Basics</h2>
      <p className="basics-instruction">
        Enter a country to view its travel basics.
      </p>
      <div className="search-section">
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) =>
          setCountry(e.target.value)
        }
      />

      <button onClick={handleSearch}>
        Search
      </button>
      </div>    

      {basics && (
        <BasicsCard basics={basics} />
      )}

      {country && (
        <button onClick={saveFavorite}>
          Add to Favorites
        </button>
      )}

      <div className="favorites-section">
        <h3>Favorites</h3>

        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.country}

              <button className="remove-button" 
                onClick={() =>
                  deleteFavorite(favorite.country)
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

export default Basics;
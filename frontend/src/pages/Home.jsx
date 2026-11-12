import '../styles/Global.css';
import '../styles/Home.css';
import { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../services/api';

function Home() {
  const [favorites, setFavorites] = useState([]);

  async function deleteFavorite(city, country) {
    try {
      const data = await removeFavorite(city, country);
      setFavorites(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavorites();
  }, []);
  return (
    <div className="home-container">
      <h1>The Wandering Wonderer</h1>
      <h2>Plan Your Trip</h2>

      <p>
        Use the navigation bar to:
      </p>

      <ul>
        <li>Check weather conditions</li>
        <li>Find local activities</li>
        <li>Learn travel basics</li>
      </ul>
 

      <div className="favorites-section">
        <h3>Favorites</h3>
        {favorites.length === 0 && <p>No favorites yet.</p>}
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.city
                ? `${favorite.city}, ${favorite.country}`
                : favorite.country}

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

export default Home;
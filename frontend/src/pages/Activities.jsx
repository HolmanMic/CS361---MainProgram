import { useState, useEffect } from "react";
import { getActivities, addFavorite, removeFavorite, getFavorites } from "../services/api";
import ActivityCard from "../components/ActivityCard";
import '../styles/Global.css';
import '../styles/Activities.css';  

function Activities() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [activities, setActivities] = useState(null);
  const [favorites, setFavorites] = useState([]);


  const handleSearch = async () => {
    if (!city || !country || !category) {
      alert("Please enter a city, country, and category.");
      return;
    }

    try {
      const data = await getActivities(
        city,
        country,
        category
      );

      setActivities(data);
    } catch (error) {
      console.error(error);
    }
  };
    async function saveFavorite() {
          try {
            const data = await addFavorite(
              city, country);
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
      <h2>Activities</h2>
      <p className="activities-instruction">
        Enter a city, country, and select a category to view activities.
      </p>
      <div className="search-section">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />  

      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) =>
          setCountry(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="tourism.sights">Tourist Attractions</option>
        <option value="entertainment">Entertainment</option>
        <option value="entertainment.museum">Museums</option>
        <option value="leisure.park">Parks</option>
        <option value="catering.restaurant">Restaurants</option>
      </select>

      <button onClick={handleSearch}>
        Search
      </button>
      </div>

      {activities && <ActivityCard
          activities={activities} />}

      {activities && (
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

export default Activities;
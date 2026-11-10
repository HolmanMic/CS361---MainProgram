import { useState } from "react";
import { getActivities } from "../services/api";
import ActivityCard from "../components/ActivityCard";
import '../styles/Global.css';
import '../styles/Activities.css';  


function Activities() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [activities, setActivities] = useState(null);


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

  return (
    <div className="page-container">
      <h2>Activities</h2>

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

      {activities && (
        <ActivityCard
          activities={activities}
        />
      )}
    </div>
  );
}

export default Activities;
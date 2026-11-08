import { useState } from "react";
import { getActivities } from "../services/api";
import ActivityCard from "../components/ActivityCard";
import '../styles/Global.css';
import '../styles/Activities.css';  


function Activities() {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [activities, setActivities] = useState(null);

  const handleSearch = async () => {
    if (!city || !category) {
      alert("Please enter a city and category.");
      return;
    }

    try {
      const data = await getActivities(
        city,
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
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

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
import { useState } from "react";
import { getBasics } from "../services/api";
import BasicsCard from "../components/BasicsCard";
import '../styles/Global.css';
import '../styles/Basics.css';  



function Basics() {
  const [country, setCountry] = useState("");
  const [basics, setBasics] = useState(null);

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

  return (
    <div className="page-container">
      <h2>Travel Basics</h2>

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
    </div>
  );
}

export default Basics;
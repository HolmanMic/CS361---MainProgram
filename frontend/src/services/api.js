import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getWeather = async (city, country, month) => {
  const response = await axios.get(
    `${API}/weather`,
    {
      params: { city, country, month },
    }
  );

  return response.data;
};

export const getActivities = async (city, country, category) => {
  const response = await axios.get(
    `${API}/activities`,
    {
      params: { city, country, category },
    }
  );

  return response.data;
};

export const getBasics = async (country) => {
  const response = await axios.get(
    `${API}/basics`,
    {
      params: { country },
    }
  );

  return response.data;
};

export async function addFavorite(city, country) {

  const response = await fetch(
    `${API}/favorites/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city,
        country
      })
    }
  );

  return response.json();
}

export async function removeFavorite(city, country) {
  const response = await fetch(
    `${API}/favorites/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city,
        country
      })
    }
  );

  return response.json();
}

export async function getFavorites() {
  const response = await fetch(
    `${API}/favorites/`,
    {
      method: "GET",
    }
  );

  return response.json();
}


import axios from "axios";

const API = "http://localhost:5000/api";

export const getWeather = async (city, month) => {
  const response = await axios.get(
    `${API}/weather`,
    {
      params: { city, month },
    }
  );

  return response.data;
};

export const getActivities = async (
  city,
  category
) => {
  const response = await axios.get(
    `${API}/activities`,
    {
      params: { city, category },
    }
  );

  return response.data;
};

export const getBasics = async (
  country
) => {
  const response = await axios.get(
    `${API}/basics`,
    {
      params: { country },
    }
  );

  return response.data;
};
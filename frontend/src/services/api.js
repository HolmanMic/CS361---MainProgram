import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const getWeather = async (city, month) => {
  const response = await axios.get(
    `${API}/weather`,
    {
      params: { city, month },
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
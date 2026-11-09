function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h3>{weather.city}</h3>

      <p>Month: {weather.month}</p>
      <p>Average High: {weather.avgHigh}°F</p>
      <p>Average Low: {weather.avgLow}°F</p>
      <p>Precipitation: {weather.avgPrecipitation} in</p>
    </div>
  );
}

export default WeatherCard;

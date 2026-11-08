function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h3>{weather.city}</h3>

      <p>Month: {weather.month}</p>
      <p>Average High: {weather.avgHigh}°F</p>
      <p>Average Low: {weather.avgLow}°F</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Precipitation: {weather.precipitation} in</p>
      <p>Condition: {weather.condition}</p>
      <p>Sunshine Hours: {weather.sunshineHours} hrs</p>
    </div>
  );
}

export default WeatherCard;
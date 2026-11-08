function ActivityCard({ activities }) {
  return (
    <div className="card">
      <h3>{activities.city}</h3>

      <p>Category: {activities.category}</p>

      <ul>
        {activities.results.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityCard;
function BasicsCard({ basics }) {
  return (
    <div className="card">
      <div className="flag-container">
        <img
          src={basics.flag}
          alt={`${basics.country} flag`}
          className="flag-image"
        />
      </div>

      <h3>{basics.country}</h3>

      <p>Capital: {basics.capital}</p>
      <p>Currency: {basics.currency}</p>
      <p>Language: {basics.language}</p>
      <p>Translate a phrase: {basics["translate a phrase"]}</p>
    </div>
  );
}

export default BasicsCard;
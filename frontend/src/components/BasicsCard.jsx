function BasicsCard({ basics }) {
  return (
    <div className="card">
      <h3>{basics.country}</h3>

      <p>Capital: {basics.capital}</p>
      <p>Currency: {basics.currency}</p>
      <p>Language: {basics.language}</p>
      <p>Translate a phrase: {basics["translate a phrase"]}</p>
    </div>
  );
}

export default BasicsCard;
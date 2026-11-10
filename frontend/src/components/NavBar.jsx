import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <span className="logo">
        The Wandering Wonderer
      </span>

      <Link to="/">Home</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/basics">Travel Basics</Link>
    </nav>
  );
}

export default NavBar;
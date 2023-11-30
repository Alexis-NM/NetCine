import { Link } from "react-router-dom";
import "./AboutLink.scss";

function AboutLink() {
  return (
    <nav className="about-link">
      <Link to="/about">À Propos</Link>
    </nav>
  );
}

export default AboutLink;

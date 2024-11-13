import "./Welcome.scss";
import AboutLink from "../components/AboutLink";
import Logo from "../assets/LOGO.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <Link className="link-to-home" to="/home">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <AboutLink />
      <Footer />
    </div>
  );
}

export default Welcome;

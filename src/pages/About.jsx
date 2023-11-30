import AboutLink from "../components/AboutLink";
import "./About.scss";
import TMDB from "../assets/TMDB.png";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <div>
        <AboutLink />
      </div>
      <img className="TMDB" src={TMDB} alt="Logo" />
      <h1 className="infos">
        Ce produit utilise l&apos;API TMDB mais n&apos;est pas affilié ou
        certifié par TMDB.
      </h1>
      <Footer />
    </div>
  );
}

export default About;

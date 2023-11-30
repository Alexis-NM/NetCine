import "./Home.scss";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import TrendingMovies from "../components/Categories/TrendingMovies";
import TrendingSeries from "../components/Categories/TrendingSeries";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <NavBar />

      <SearchBar />

      <TrendingMovies />

      <TrendingSeries />

      <Footer />
    </div>
  );
}

export default Home;

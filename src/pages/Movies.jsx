import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./Movies.scss";
import CategoryMovies from "../components/Categories/CategoryMovies";
import UpcomingMovies from "../components/Categories/UpcomingMovies";
import Footer from "../components/Footer";

function Movies() {
  return (
    <div className="movies">
      <NavBar />
      <SearchBar />
      <CategoryMovies />
      <UpcomingMovies />
      <Footer />
    </div>
  );
}

export default Movies;

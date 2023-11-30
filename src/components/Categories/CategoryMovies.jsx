import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import CarouselMovies from "../CarouselMovies";
import "./Style.scss";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function CategoryMovies() {
  const [genres, setGenres] = useState([]);
  const [categoryButton, setCategoryButton] = useState(28);
  const [movies, setMovies] = useState([]);

  // Fetch des catégories de films
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=fr&api_key=${apiKey}`
      );
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Error fetching category movies:", error);
    }
  };

  // Utilisation de useCallback pour mémoriser fetchMovies
  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&with_genres=${categoryButton}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [categoryButton]);

  useEffect(() => {
    fetchCategory();
    -fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="barre">
      <h2 className="cross-bar">Les Films</h2>
      <select
        className="slider-button"
        onChange={(e) => setCategoryButton(e.target.value)}
      >
        {genres.map((genre) => (
          <option className="slider-value" key={genre.name} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {movies.length > 0 && <CarouselMovies movies={movies} />}
    </div>
  );
}

export default CategoryMovies;

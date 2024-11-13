import { useState } from "react";
import axios from "axios";
import CarouselMovies from "../CarouselMovies";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function TrendingMovies() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=fr-FR&include_adult=false`
      );
      setTrending(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  if (trending.length === 0) {
    fetchTrending();
  }

  return (
    <div className="barre">
      <h2 className="cross-bar-movie">Films à l&apos;affiche</h2>
      <CarouselMovies movies={trending} />
    </div>
  );
}

export default TrendingMovies;

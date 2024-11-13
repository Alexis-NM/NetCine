import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import CarouselSeries from "../CarouselSeries";
import "./Style.scss";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function CategorySeries() {
  const [genres, setGenres] = useState([]);
  const [categoryButton, setCategoryButton] = useState();
  const [series, setSeries] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=fr-FR`
      );
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Error fetching category series:", error);
    }
  };

  // Utilisation de useCallback pour mémoriser fetchSeries
  const fetchSeries = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&include_adult=false&with_genres=${categoryButton}&language=fr-FR`
      );
      setSeries(response.data.results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  }, [categoryButton]);

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);

  return (
    <div className="barre">
      <h2 className="cross-bar">Les Séries</h2>
      <select
        className="slider-button"
        onChange={(e) => setCategoryButton(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre.name} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {series.length > 0 && <CarouselSeries series={series} />}
    </div>
  );
}

export default CategorySeries;

import { useState } from "react";
import axios from "axios";
import CarouselSeries from "../CarouselSeries";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function UpcomingSeries() {
  const [upco, setUpco] = useState([]);

  // Fetch des films à venir
  const fetchUpco = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=fr-FR`
      );
      setUpco(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };
  // dans le tableau de recom
  if (upco.length === 0) {
    fetchUpco();
  }

  return (
    <div className="barre">
      <h2 className="cross-bar-serie">Sorties récentes</h2>
      <CarouselSeries series={upco} />
    </div>
  );
}

export default UpcomingSeries;

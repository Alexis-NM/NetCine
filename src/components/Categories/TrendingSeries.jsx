import { useState } from "react";
import axios from "axios";
import CarouselSeries from "../CarouselSeries";

const apiKey = "1329e3fdf6cb4c841d442aac3a82d249"

function TrendingSeries() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&language=fr-FR&include_adult=false`
      );
      setTrending(response.data.results);
    } catch (error) {
      console.error("Error fetching series", error);
    }
  };

  if (trending.length === 0) {
    fetchTrending();
  }

  return (
    <div className="barre">
      <h2 className="cross-bar-serie">Série populaire</h2>
      <CarouselSeries series={trending} />
    </div>
  );
}

export default TrendingSeries;

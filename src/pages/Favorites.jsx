// Favorites.jsx
import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import MovieCard from "../components/Cards/MovieCard";
import SerieCard from "../components/Cards/SerieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import "./Favorites.scss";
import Footer from "../components/Footer";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  const movieFavorites = favorites.filter(
    (favorite) => favorite.type === "movie"
  );
  const serieFavorites = favorites.filter(
    (favorite) => favorite.type === "serie"
  );

  return (
    <div className="home">
      <NavBar />
      <SearchBar />
      <div className="barre">
        <h1 className="favorite-title">Mes Favoris</h1>
        <h2 className="title-category">Films</h2>
      </div>
      <div className="favorite-container-movie">
        {movieFavorites.length > 0 ? (
          movieFavorites.map((favorite) => (
            <MovieCard key={favorite.id} movieId={favorite.id} />
          ))
        ) : (
          <p>Pas de film ajouté.</p>
        )}
      </div>
      <div className="barre">
        <h2 className="title-category">Séries</h2>
      </div>
      <div className="favorite-container-serie">
        {serieFavorites.length > 0 ? (
          serieFavorites.map((favorite) => (
            <SerieCard key={favorite.id} serieId={favorite.id} />
          ))
        ) : (
          <p>Pas de série ajoutée.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favorites;

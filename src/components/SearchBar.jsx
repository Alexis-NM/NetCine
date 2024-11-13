import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";
import "./SearchBar.scss";
import Loupe from "../assets/Loupe6.png";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [mediaList, setMediaList] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    if (inputSearch) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${inputSearch}&include_adult=false&language=fr-FR&api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          const limitedData = data.results.slice(0, 5);
          setMediaList(limitedData);
        })
        .catch((err) => console.error(err));
    } else {
      setMediaList([]);
    }
  }, [inputSearch, apiKey]);

  const handleFavoriteClick = (media) => {
    let mediaType = "other";

    if (media.release_date) {
      mediaType = "movie";
    } else if (media.first_air_date) {
      mediaType = "serie";
    }

    const isAlreadyFavorite = isFavorite(media.id);

    const favoriteMedia = {
      id: media.id,
      type: mediaType,
    };

    if (isAlreadyFavorite) {
      removeFavorite(media.id);
    } else {
      addFavorite(favoriteMedia);
    }
  };

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <div className="search-box">
          <input
            placeholder="Votre recherche ici..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <img className="loupe" src={Loupe} alt="loupe" />
        </div>
      </div>
      <div className="search-result">
        {mediaList?.map((media) => {
          if (media.poster_path) {
            return (
              <div className="card-media" key={media.id}>
                {media.poster_path && (
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                      alt={media.title || media.name}
                    />
                    <button
                      type="button"
                      onClick={() => handleFavoriteClick(media)}
                      className={`favorite-button ${
                        isFavorite(media.id) ? "is-favorite" : ""
                      }`}
                    >
                      ♥
                    </button>
                  </>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SearchBar;

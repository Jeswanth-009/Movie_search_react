// Favorite.jsx
import React from 'react';
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from '../components/MovieCard';
import "../css/Favorites.css";

function Favorites() {
  const { favorites, removeFromFavorites } = useMovieContext();

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <div>No movies in your favorites!</div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id}>
              <button onClick={() => removeFromFavorites(movie.id)} className="remove-btn">Remove</button>
            </MovieCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

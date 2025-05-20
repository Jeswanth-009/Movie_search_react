// moviecard.jsx
import React from 'react';
import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { addToFavorites } = useMovieContext();

  const onFavoriteClick = () => {
    addToFavorites(movie);
    alert(`Added ${movie.title} to favorites!`);
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          🤍
        </button>
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
    </div>
  );
}

export default MovieCard;

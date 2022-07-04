/* eslint-disable */
import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => {
  const movies: Movie[] = []
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
};

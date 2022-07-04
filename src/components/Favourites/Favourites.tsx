import React from 'react';
import { MoviesList } from '../MoviesList';

export const Favourites: React.FC = () => {
  return (
    <div className="ml-6 mr-6">
      <div>
        <form>
          <div className="field">
            <label className="label" htmlFor="movie-title">
              Key words to search
              <div className="control">
                <input
                  type="text"
                  id="movie-title"
                  placeholder="Enter a key word to search"
                  className="input"
                  required
                />
              </div>
            </label>

            <label className="label" htmlFor="movie-year">
              Movie year
              <div className="control">
                <input
                  type="number"
                  id="movie-year"
                  placeholder="Enter a year to search"
                  className="input"
                />
              </div>
            </label>
          </div>

          <div className="field columns">
            <div className="control column has-text-centered-mobile level-item">
              <button
                type="submit"
                className="button is-normal is-primary is-light ml-0 mt-3"
              >
                Filter movies
              </button>

              <button
                type="button"
                className="button is-normal is-warning is-light ml-3 mt-3"
              >
                Reset filter
              </button>
              <button
                type="button"
                className="button is-normal is-danger is-light ml-3 mt-3"
              >
                Reset all
              </button>
            </div>

            <div className="control mt-4 has-icons-left has-text-centered-mobile">
              <div className="select is-medium">
                <select>
                  <option>Select sort type</option>
                  <option>Sort by Year</option>
                  <option>Sort by Title</option>
                </select>
              </div>
              <span className="icon is-medium is-left is-hidden-mobile">
                <i className="fas fa-globe"></i>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5 container">
        <MoviesList />
      </div>
    </div>
  );
};

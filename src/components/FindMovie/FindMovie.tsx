import React from 'react';

import { MoviesList } from '../MoviesList';

export const FindMovie: React.FC = () => {
  return (
    <>
      <form>
        <div className="field">
          <label className="label" htmlFor="movie-title">
            Movie title

            <div className="control">
              <input
                type="text"
                id="movie-title"
                placeholder="Enter a title to search"
                className="input"
              />
            </div>
          </label>

          <label className="label" htmlFor="movie-year">
            Movie year

            <div className="control">
              <input
                type="number"
                id="movie-year"
                placeholder="Enter a title to search"
                className="input"
              />
            </div>
          </label>

          {true && (
            <p className="help is-danger">
              Can&apos;t find a movie with such a title
            </p>
          )}
        </div>

        <div className="field is-grouped mt-5 control">
          <button
            type="button"
            className="button is-light is-warning is-normal"
          >
            Find movies
          </button>

          <button
            type="submit"
            className="button is-light is-primary is-normal ml-3"
          >
            Add random movie
          </button>
        </div>
      </form>

      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <div className="container">
        <h2 className="title mt-3">Preview</h2>
        <nav className="pagination is-normal is-right" role="navigation" aria-label="pagination">
          <a className="pagination-previous" title="This is the first page">Previous</a>
          <a className="pagination-next">Next page</a>
          <ul id="test" className="pagination-list">
            <li>
              <a className="pagination-link" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 2">2</a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 3">3</a>
            </li>
          </ul>
        </nav>
        <MoviesList />
      </div>
    </>

  );
};

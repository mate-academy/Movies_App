/* eslint-disable */
import React from 'react';
import {
  Route,
  Link,
  Routes,
  HashRouter,
  Navigate,
} from 'react-router-dom';
import { Favourites } from './components/Favourites/Favourites';
import { Search } from './components/Search/Search';
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";

export const App: React.FC = () => {

  return (
    <HashRouter>
      <div className="box tabs is-centered is-toggle is-toggle-rounded">
        <ul>
          <li>
            <Link to="favourites">
              <span className="icon is-small"><i className="fa-solid fa-star" /></span>
              <span>Favourites</span>
            </Link>
          </li>
          <li>
            <Link to="search">
              <span className="icon is-small"><i className="fa-solid fa-magnifying-glass" /></span>
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/home" element={<Navigate to="/favourites" />} />

        <Route path="/" element={<Navigate to="/favourites" />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

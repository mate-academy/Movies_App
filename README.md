Implement FindMovie App with at least 2 pages (Favourites and Search). Load movies from OMDb API and save them to the favorites list (You need to register and get an API key).

* Use HashRouter to navigate between pages
* Search page requires a user to enter a title. 
  * Base URL is `https://www.omdbapi.com/?apikey=[yourkey]&s=[title]`
  * You can also add year, type or page query parameters
* Search results are shown as a list of cards
  * Add pagination to the search page.
* Implement an ability to add a selected Movie to favorites.
* All selected films should be saved in the LocalStorage and shown on favourites page
* Add posibility to delete movies from favourites page
* Add filter by title and year (save filter params in the URL)
* Add sort by title and year
* Add reset filters and reset all buttons

(OPTIONAL)
* Navigate from / and /home path to /favourites path
* Show 404 page for all other paths
* Show messages, when movie is added or deleted
* Implement a button to add random movie to the list

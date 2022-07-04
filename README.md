Implement FindMovie App. It must has at least 2 pages (Favourites and Search). Load movies from OMDb API and save them to the favorites list (You need to register and get an API key).

* Use HashRouter to navigate between pages
* When user enters a movie title at the search page and clicks a search button, send a request to https://www.omdbapi.com/?apikey=[yourkey]&s=[title]. Add year/type/page if needed.
* You must show list of results to user with ability to add selected Movie.
* Add pagination to the search page.
* All selected films need to save in the local storage and show at favourites page
* Add posibility to delete movies from favourites page
* Add filter by title and year (use query params for filter)
* Add sort by title and year
* Add reset filters and reset all buttons

(OPTIONAL)
* Implement button to add random movie to the list;
* Navigate from / and /home path to /favourites path
* Show error when entered not valid path
* Show messages, when movie added and movie deleted

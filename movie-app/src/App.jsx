import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import SearchBar from "./components/Search.jsx";
import logo from "./assets/images/logo.jpg";
import noMovie from "./assets/images/no-movie-found.jpeg";
import MovieCard from "./components/MovieCard.jsx";
import Loader from "./components/Loader.jsx";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const API_BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;
  const API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = useCallback(async (query) => {

    const API_OPTIONS = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    setLoading(true);
    setErrorMessage(null);

    try {
      const endpoint = query ? "search/movie" : "movie/popular";
      const response = await fetch(
        `${API_BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      if (data.results.length === 0) {
        setErrorMessage("No movies found");
        setMovies([]);
        return;
      } else {
        setMovies(data.results);
      }
    } catch (error) {
      setErrorMessage(error.message || "Error fetching movies");
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL, API_KEY, API_ACCESS_TOKEN]);

  useEffect(() => {
    fetchMovies(debouncedSearchValue);
  }, [debouncedSearchValue, fetchMovies]);

  if (movies.length === 0 && !loading && !errorMessage) {
    return (
      <div className="wrapper">
        <header className="hero-header">
          <img className="logo" src={logo} alt="Site logo" />
          <h1 className="hero-title">
            Find <span className="text-gradient">Movies</span> You'll Love
            Without the Hassle. 
          </h1>
        </header>

        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <h2>All Movies</h2>
          <img src={noMovie} alt="No movies found" />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <header className="hero-header">
        <img className="logo" src={logo} alt="Site logo" />
        <h1 className="hero-title">
          Find <span className="text-gradient">Movies</span> You'll Love Without
          the Hassle
        </h1>
      </header>

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <h2>All Movies</h2>
        {loading ? (
          <Loader loading={loading} />
        ) : errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

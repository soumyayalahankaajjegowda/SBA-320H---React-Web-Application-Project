import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setpage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);


//load popular movies on initial render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
            const popularMovies = await getPopularMovies( page);
            setMovies(popularMovies.results);
            setTotalPages(popularMovies.total_pages);
        setError(null);
      } catch (err) {
        console.log("Error fetching popular movies:", err);
        setError("Failed to load movies...");
      }
      finally {
        setLoading(false);
      }
      }; 
      loadPopularMovies();
    
  }, [page]);

  //  const movies = getPopularMovies()
  // [
  //   { id: 1, title: "john Wick", release_date: "2020" },
  //   { id: 2, title: "Terminator", release_date: "1999" },
  //   { id: 3, title: "The Matrix", release_date: "1998" },
  // ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;   //prevent empty or duplicate searches

    if (loading) return
    setLoading(true);
    setHasSearched(true);
    try {
      const searchResults = await searchMovies(searchQuery, page);
      setMovies(searchResults. results);
      setTotalPages(searchResults.total_pages);
      setError(null)
    } catch (err) {
        console.log("Error searching movies:", err);
        setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
    // alert(searchQuery);
    // setSearchQuery("");
  };

  //pagination Handler
  const goToPreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
 
  return (

    <div className="home">
      {/* Search form*/}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>


          {/* Error message */}
       {error && <div className="error-message">{error}</div>}

        {/* Loading spinner */}
      {loading ?(
        <div className="spinner">Loading...</div>
    ):(
      <div>
      {movies.length > 0 ? (
           <div className="movies-grid">  
       {movies.map(
        (movie) => 
         // movie.title.toLowerCase().startsWith(searchQuery) &&
           ( <MovieCard movie={movie} key={movie.id} />
          )
       )} 
    </div>
    ) : (
      hasSearched && (
        <div className="no-results">
          No movies found for "{searchQuery}"
          </div>
      )
    )}
    {movies.length > 0 && (
            <div className="pagination">
              <button
                onClick={goToPreviousPage}
                disabled={page === 1}
                className="pagination-button"
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={page === totalPages}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
   

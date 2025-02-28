function MovieCard({ movie }) {


    function onFavoriteClick() {
      alert("clicked")
    }
  return<div className="movie-card">
    <div classNamer="movie-poster">
      <image src={movie.url} alt={movie.title}/>
      <div className="movie-overlay">
        <button className="favrite-btn" onClick={}>
           ♥
        </button>
         
      </div>
    </div>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  </div>
}
export default MovieCard;
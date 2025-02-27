
function MovieCard({ movie }) {
  return<div className="movie-card">
    <div classNamer="movie-poster">
      <image src={movie.url} alt={movie.title}/>
      <div className="movie-overlay">
        <button className="favrite-btn" onClick={}></button>
      </div>
    </div>
  </div>
}
function MovieCard({ poster, title, year, rating }) {
    return (
        <div className="movie-card">
            <img src={poster} alt={title} />
            <div className="movie-card-content">
                <h2>{title}</h2>
                <p>Year: {year}</p>
                <p className="rating">Rating: {rating}</p>
            </div>
        </div>
    )
}

export default MovieCard;
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({ movie: { title, original_language, release_date, vote_average, poster_path } }) {
    return (
        <div className="movie-card">
            {poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="movie-poster"
                />
            ) : (
                /* Safe, styled fallback when no poster is available */
                <div className="no-poster">No Poster</div>
            )}

            <div className="movie-info">
                <h3 className="movie-title" title={title}>{title}</h3>

                <div className="movie-content">
                    <div className="ratings">
                        {vote_average > 3.5 ? (
                            <StarIcon className="star-icon" />
                        ) : (
                            <StarBorderIcon className="star-icon" />
                        )}
                        <span className="sep">•</span>
                        <p className="movie-vote-average">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span className="sep">•</span>
                    <p className="movie-original-language">{original_language ? original_language : 'N/A'}</p>
                    <span className="sep">•</span>
                    <p className="movie-release-date">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

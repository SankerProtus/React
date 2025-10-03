import "./styles.css";
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import Form from './components/Form';
import movies from "./components/movies";


function App() {

  return (
    <div className="app-container">
      <Header />
      <Form />
      <main className="movies-container">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App;

import { Link } from "react-router-dom";

const Home = () => {  

  return (
    <section className="home-section">
      <h1 className="home-title">Welcome to the Quiz App</h1>
      <p className="home-description">
        Test your knowledge across different topics. Ready to begin?
      </p>

      <Link to="/quiz" className="start-quiz-btn">
        Start Quiz
      </Link>
    </section>
  );
};

export default Home;

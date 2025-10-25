import { Link } from "react-router-dom";

const Result = ({ score, totalQuestions, answers, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreEmoji = () => {
    if (percentage >= 80) return "🎉";
    if (percentage >= 60) return "👍";
    if (percentage >= 40) return "😊";
    return "😅";
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Completed!</h2>
      <p className="result-score">
        You scored {score} out of {totalQuestions} ({percentage}%) {getScoreEmoji()}
      </p>
      
      {answers && (
        <div className="answer-review">
          <h3>Review Your Answers:</h3>
          {answers.map((answer, index) => (
            <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
              <p><strong>Q{index + 1}:</strong> {answer.question}</p>
              <p><strong>Your answer:</strong> {answer.selectedAnswer}</p>
              {!answer.isCorrect && (
                <p><strong>Correct answer:</strong> {answer.correctAnswer}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="result-buttons">
        <button className="retry-btn" onClick={onRestart}>
          Retry Quiz
        </button>
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Result;

import { useEffect, useState } from "react";
import Question from "./Question";
import Result from "./Result";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const QuizCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  const quizQuestions = questions || [];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(VITE_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.response_code !== 0) {
          setError("Failed to fetch valid questions");
          setQuestions([]);
          return;
        }
        setQuestions(data.results || []);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setError("Failed to load questions. Please try again later.");
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    // Check if the answer is correct and update score
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Store the answer
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        id: uuidv4(),
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: isCorrect,
      },
    ]);

    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  if (showResult) {
    return (
      <div className="quiz-card">
        <Result
          score={score}
          totalQuestions={quizQuestions.length}
          answers={answers}
          onRestart={resetQuiz}
        />
      </div>
    );
  }

  if (!loading && quizQuestions.length === 0) {
    return (
      <div className="quiz-card">
        <h4>No questions available.</h4>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      {loading ? (
        <LoadingSpinner text="Loading questions..." />
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : questions.length === 0 ? (
        <p>No questions available.</p>
      ) : currentQuestionIndex < questions.length ? (
        <>
          <div className="quiz-progress">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </div>
          <Question
            questions={quizQuestions}
            currentQuestionIndex={currentQuestionIndex}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswer}
          />
        </>
      ) : (
        <>
          <LoadingSpinner text="Loading questions..." />
          <p>Unexpected state. Please restart the quiz.</p>
        </>
      )}
    </div>
  );
};

export default QuizCard;

import { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton";

const Question = ({ questions, currentQuestionIndex, selectedAnswer, onAnswerSelect }) => {

  const currentQuestion = questions[currentQuestionIndex];
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (currentQuestion) {
      const allAnswers = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers
      ];
      
      // Shuffle the answers
      const shuffled = allAnswers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
    }
  }, [currentQuestion]);


  if (!currentQuestion) {
    return <div>No question available</div>;
  }

  return (
    <div>
      <h3 className="question-title">{currentQuestion.question}</h3>
      <div className="answers-grid">
        {shuffledAnswers.map((answer, index) => (
          <AnswerButton
            key={index}
            text={answer}
            isSelected={selectedAnswer === answer}
            selectAnswer={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;


const AnswerButton = ({ text, selectAnswer, isSelected }) => {
  return (
    <button 
      type="button" 
      className={`answer-btn ${isSelected ? 'selected' : ''}`}
      onClick={() => selectAnswer(text)}
    >
      {text}
    </button>
  );
};

export default AnswerButton;


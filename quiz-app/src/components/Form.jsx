const Form = () => {
  return (
    <form className="quiz-settings-form">
      <label htmlFor="number-of-questions">Number of Questions:</label>
      <input
        type="number"
        id="number-of-questions"
        name="number-of-questions"
        min="1"
        max="50"
        defaultValue="10"
        onChange={handleInputChange}
        value={quizSettings.numberOfQuestions}
      />
      <label htmlFor="question-category"> Select Category:</label>
      <select
        name="question-category"
        id="question-category"
        onChange={handleInputChange}
        value={quizSettings.category}
      >
        <option value="any">Any Category</option>
        <option value="general_knowledge">General Knowledge</option>
        <option value="entertainment_books">Entertainment: Books</option>
        <option value="entertainment_film">Entertainment: Film</option>
        <option value="entertainment_music">Entertainment: Music</option>
        <option value="entertainment_musicals">
          Entertainment: Musicals & Theatres
        </option>
        <option value="entertainment_video_games">
          Entertainment: Video Games
        </option>
        <option value="science_nature">Science & Nature</option>
        <option value="science_computers">Science: Computers</option>
        <option value="science_mathematics">Science: Mathematics</option>
        <option value="mythology">Mythology</option>
        <option value="sports">Sports</option>
        <option value="geography">Geography</option>
        <option value="history">History</option>
        <option value="politics">Politics</option>
        <option value="art">Art</option>
        <option value="celebrities">Celebrities</option>
        <option value="animals">Animals</option>
      </select>
      <label htmlFor="question-difficulty">Difficulty:</label>
      <select
        name="question-difficulty"
        id="question-difficulty"
        onChange={handleInputChange}
        value={quizSettings.difficulty}
      >
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label htmlFor="question-type">Select Type:</label>
      <select
        name="question-type"
        id="question-type"
        onChange={handleInputChange}
        value={quizSettings.type}
      >
        <option value="any">Any Type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </select>
    </form>
  );
};

export default Form;
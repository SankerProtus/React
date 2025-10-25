
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

function App() {
  const [headingText, setHeadingText] = useState("");

  const [tasks, setTask] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setHeadingText(value)
  }

  function addTask() {
    setTask(prevTask => ([...prevTask, headingText]));
    
    setHeadingText("");
  }
 
  function deleteTask(index) {
    setTask(prevTask => prevTask.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea 
        headingText={headingText} 
        onChange={handleChange} 
        onAdd={addTask} 
      />

      <div>
        <ul>
          {tasks.map((task, index) => (
            <TodoItem 
              key={index} 
              task={task} 
              onDelete={() => deleteTask(index)} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

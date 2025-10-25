
function TodoItem({ task, onDelete }) {

  return (
    <li 
    onClick={onDelete} 
    style={{cursor: "pointer"}} 
    >{task}</li>
  );
}

export default TodoItem;

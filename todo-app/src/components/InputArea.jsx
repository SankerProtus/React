function InputArea({ headingText, onChange, onAdd }) {
  return (
    <div className="form">
      <input type="text" onChange={onChange} value={headingText} />
      <button onClick={onAdd}>
        <span>Add</span>
      </button> 
    </div>
  );
}

export default InputArea;

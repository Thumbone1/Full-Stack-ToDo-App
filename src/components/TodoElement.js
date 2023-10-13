function TodoElement({ type = "checkbox", checked, text, id, removeItem }) {
  function handleCheck() {
    removeItem(id);
  }

  return (
    <div className="todo-element">
      <input type={type} checked={checked} onChange={handleCheck} />
      <span>{text}</span>
    </div>
  );
}

export default TodoElement;

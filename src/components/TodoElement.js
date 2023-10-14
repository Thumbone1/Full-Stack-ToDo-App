function TodoElement({ type = "checkbox", checked, text, id, removeItem }) {
  function handleCheck() {
    removeItem(id);
  }

  return (
    <div className="todo-element">
      <div class="checkbox-wrapper">
        <input
          id="check"
          type={type}
          checked={checked}
          onChange={handleCheck}
        />
        <label for="check">
          <span></span>
        </label>
      </div>
      <span>{text}</span>
    </div>
  );
}

export default TodoElement;

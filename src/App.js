import Form from "components/Form";
import TodoElement from "components/TodoElement";
import { useState } from "react";

export default function MyTodoApp() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="todo-container">
      <Form addItem={addItem} />
      {items.map((item, index) => (
        <TodoElement
          id={index} // have to pass id as a prop
          key={index} // have to use key for iteration (cannot pass key as a prop)
          text={item}
          removeItem={removeItem}
          checked={false}
        />
      ))}
    </div>
  );
}

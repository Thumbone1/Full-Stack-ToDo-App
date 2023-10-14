import Form from "components/Form";
import TodoElement from "components/TodoElement";
import { useEffect, useState } from "react";

const apiEndpoint = "http://localhost:3005/";

export default function MyTodoApp() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log("Error fetching data", err));
  }, []);

  const addItem = (item) => {
    if (item) {
      fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify({ title: item }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setItems([...items, data]);
        })
        .catch((err) => console.log("Error fetching data", err));
    }
  };

  const removeItem = (id) => {
    fetch(apiEndpoint + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setItems(items.filter((item) => item.id !== id)));
  };

  return (
    <div className="todo-container">
      <Form addItem={addItem} />
      {items.map((item) => (
        <TodoElement
          key={item.id}
          id={item.id}
          text={item.title}
          removeItem={removeItem}
          checked={false}
        />
      ))}
    </div>
  );
}

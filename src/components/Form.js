import Button from "components/Button";
import { useRef } from "react";

function Form({ addItem }) {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const itemText = ref.current.value.trim();
    if (itemText) {
      addItem(itemText);
      ref.current.value = "";
    }
  }
  return (
    <form className="input-form">
      <label>Todo</label>
      <input type="text" placeholder="next todo" ref={ref} required/>
      <Button submit={handleSubmit} />
    </form>
  );
}

export default Form;

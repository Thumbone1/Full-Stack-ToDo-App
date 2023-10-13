function Button({ type = "submit", name = "Submit", submit }) {
  return (
    <button type={type} className="btn" onClick={submit}>
      {name}
    </button>
  );
}

export default Button;

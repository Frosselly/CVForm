import "../styles/input.css"

export default function Input({text, id, type="text"}) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input id={id} type={type}></input>
    </div>
  );
}

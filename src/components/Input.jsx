import "../styles/input.css"

export default function Input({text, id, type="text"}) {
  return (
    <div className="inputDiv">
      <label htmlFor={id}>{text}</label>
      <input name={id} id={id} type={type}></input>
    </div>
  );
}

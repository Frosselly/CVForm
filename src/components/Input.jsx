import "../styles/input.css"

export default function Input({text, id, type="text", onChange}) {
  return (
    <div className="inputDiv">
      <label htmlFor={id}>{text}</label>
      <input id={id} name={id} type={type} onChange={onChange}></input>
    </div>
  );
}

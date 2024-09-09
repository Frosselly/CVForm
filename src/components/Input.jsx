import "../styles/input.css"

export default function Input({text, value, id, type="text", onChange}) {
  return (
    <div className="inputDiv">
      <label htmlFor={id}>{text}</label>
      <input id={id} value={value} name={id} type={type} onChange={onChange}></input>
    </div>
  );
}

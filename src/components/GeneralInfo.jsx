import Input from "./Input";

export default function GeneralInfo({ props, onChange }) {
  return (
    <div>
      <Input
        text={"Name:"}
        id={"name"}
        value={props.name}
        onChange={onChange}
      />
      <Input
        text={"Email:"}
        id={"email"}
        value={props.email}
        type={"email"}
        onChange={onChange}
      />
      <Input
        text={"Phone number:"}
        id={"number"}
        value={props.number || ""}
        type={"number"}
        onChange={onChange}
      />
    </div>
  );
}

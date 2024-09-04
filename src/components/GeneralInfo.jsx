import Input from "./Input";

export default function GeneralInfo({onChange}) {
  return (
    <div>
      <Input text={"Name:"} id={"name"} onChange={onChange}/>
      <Input text={"Email:"} id={"email"} type={"email"}  onChange={onChange}/>
      <Input text={"Phone number:"} id={"number"} type={"number"}  onChange={onChange}/>
    </div>
  );
}

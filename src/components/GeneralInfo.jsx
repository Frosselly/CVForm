import Input from "./Input";

export default function GeneralInfo() {
  return (
    <>
      <Input text={"Name:"} id={"name"} />
      <Input text={"Email:"} id={"email"} type={"email"}/>
      <Input text={"Phone number:"} id={"number"} type={"number"}/>
    </>
  );
}

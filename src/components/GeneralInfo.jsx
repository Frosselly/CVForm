import Input from "./Input";

export default function GeneralInfo() {
  return (
    <section className="General">
      <Input text={"Name:"} id={"Name"} />
      <Input text={"Email:"} id={"Email"} type={"email"}/>
      <Input text={"Phone number:"} id={"Phone_number"} type={"number"}/>
    </section>
  );
}

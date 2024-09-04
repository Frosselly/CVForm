import Input from "./Input";

export default function GeneralInfo() {
  return (
    <section className="General">
      <Input text={"Name:"} id={"name"} />
      <Input text={"Email:"} id={"email"} type={"email"}/>
      <Input text={"Phone number:"} id={"phoneNumber"} type={"number"}/>
    </section>
  );
}

import Input from "./Input";

export default function EducationalBackground({className="education"}) {
  return (
    <section className={className}>
      <Input text={"School name:"} id={"School_name"} />
      <Input text={"Title of study"} id={"Title_of_study"} />
      <Input 
        text={"Start of study: "}
        id={"Start_of_study"} 
        type={"date"} 
      />
      <Input
        text={"End of study: "} 
        id={"End_of_study"}
        type={"date"}
      />
    </section>
  );
}

import Input from "./Input";

export default function EducationalBackground() {
  return (
    <>
      <Input text={"School name:"} id={"schoolName"} />
      <Input text={"Title of study"} id={"studyTitle"} />
      <Input 
        text={"Start of study: "}
        id={"studyStartDate"} 
        type={"date"} 
      />
      <Input
        text={"End of study: "} 
        id={"studyEndDate"}
        type={"date"}
      />
    </>
  );
}

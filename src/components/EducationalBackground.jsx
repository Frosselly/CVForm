import Input from "./Input";

export default function EducationalBackground({ onChange }) {
  return (
    <div>
      <Input text={"School name:"} id={"schoolName"} onChange={onChange} />
      <Input text={"Title of study"} id={"studyTitle"} onChange={onChange} />
      <Input
        text={"Start of study: "}
        id={"studyStartDate"}
        type={"date"}
        onChange={onChange}
      />
      <Input
        text={"End of study: "}
        id={"studyEndDate"}
        type={"date"}
        onChange={onChange}
      />
    </div>
  );
}

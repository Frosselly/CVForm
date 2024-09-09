import Input from "./Input";

export default function EducationalBackground({ props, onChange }) {
  return (
    <div>
      <Input
        text={"School name:"}
        id={"schoolName"}
        value={props.schoolName}
        onChange={onChange}
      />
      <Input
        text={"Title of study"}
        id={"studyTitle"}
        value={props.studyTitle}
        onChange={onChange}
      />
      <Input
        text={"Start of study: "}
        id={"studyStartDate"}
        value={props.studyStartDate}
        type={"date"}
        onChange={onChange}
      />
      <Input
        text={"End of study: "}
        id={"studyEndDate"}
        value={props.studyEndDate}
        type={"date"}
        onChange={onChange}
      />
    </div>
  );
}

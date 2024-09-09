export default function displayEducation(props) {
  return (
    <div className="output" key={"education" + props.key}>
      {props.schoolName && (
        <>
          <p>School name: </p> <p>{props.schoolName}</p>
        </>
      )}
      {props.studyTitle && (
        <>
          <p>Title of study: </p> <p>{props.studyTitle}</p>
        </>
      )}
      {props.studyStartDate && (
        <>
          <p>Start of study: </p> <p>{props.studyStartDate}</p>
        </>
      )}
      {props.studyEndDate && (
        <>
          <p>End of study: </p> <p>{props.studyEndDate}</p>
        </>
      )}
    </div>
  );
}

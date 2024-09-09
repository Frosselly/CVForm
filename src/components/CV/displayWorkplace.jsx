export default function displayWorkplace(props) {
  return (
    <div className="output" key={"work" + props.key}>
      {props.companyName && (
        <>
          <p>Company name: </p> <p>{props.companyName}</p>{" "}
        </>
      )}
      {props.positionTitle && (
        <>
          <p>Position title: </p> <p>{props.positionTitle}</p>{" "}
        </>
      )}
      {props.mainResponsibilities && (
        <>
          <p>Main responsibilities: </p> <p>{props.mainResponsibilities}</p>{" "}
        </>
      )}
      {props.workStartDate && (
        <>
          <p>Start date: </p> <p>{props.workStartDate}</p>{" "}
        </>
      )}
      {props.workEndDate && (
        <>
          <p>End date: </p> <p>{props.workEndDate}</p>{" "}
        </>
      )}
    </div>
  );
}

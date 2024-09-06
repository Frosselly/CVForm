import "../../styles/display.css";

export function CVDisplay({ props }) {
  function displayGeneralInfo(data) {
    let displayData = [];
    for (let [index, input] of Object.entries(data)) {
      const edited = (
        <div className="output">
          <p>{index}:</p> <p>{input}</p>
        </div>
      );

      displayData.push(edited);
    }
    return displayData;
  }
  function displayArrayInfo(data) {
    let displayData = [];
    for (let [index, entry] of data.entries()) {
      const lineBreak = <hr></hr>;
      index > 0 && displayData.push(lineBreak);
      for (let [index, input] of Object.entries(entry)) {
        const edited = (
          <div className="output">
            <p>{index}:</p> <p>{input}</p>
          </div>
        );

        displayData.push(edited);
      }
    }
    return displayData;
  }

  return (
    <>
      <div className="content">
        <div className="displayBlock">
          <h3>General info</h3>
          {displayGeneralInfo(props.general)}
        </div>

        {props.educations.length != 0 && (
          <div className="displayBlock">
            <h3>Educational info</h3>
            {displayArrayInfo(props.educations)}
          </div>
        )}

        {props.workplaces.length != 0 && (
          <div className="displayBlock">
             <h3>Work experience</h3>
            {displayArrayInfo(props.workplaces)}
          </div>
        )}
      </div>
    </>
  );
}

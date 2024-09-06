import "../../styles/display.css";

export function CVDisplay({ props, onEdit, onNewCV }) {

  function displayGeneralInfo(data) {
    let displayData = [];
    for (let [index, input] of Object.entries(data)) {
      const edited = (
        <>
          {input.length != 0 && (
            <>
              <div className="output" key={index+input}>
                <p key={index}>{index}:</p> <p>{input}</p>
              </div>
            </>
          )}
        </>
      );

      displayData.push(edited);
    }
    return displayData;
  }
  function displayArrayInfo(data) {
    let displayData = [];
    for (let [index, entry] of data.entries()) {
      const lineBreak = <hr key={'lineBreak'+index}></hr>;
      index > 0 && displayData.push(lineBreak);
      displayData.push(displayGeneralInfo(entry))
    }
    return displayData;
  }

  return (
    <>
      <nav>
        <button onClick={onNewCV}>New CV</button>
        <button onClick={onEdit}>Edit</button>
      </nav>
      <div className="content" key="content">
      { (
        <div className="displayBlock" key="gen">
          <h3>General info</h3>
          {displayGeneralInfo(props.general)}
        </div>
)}
        {props.educations.length != 0 && (
          <div className="displayBlock"  key="edu-info">
            <h3>Educational info</h3>
            {displayArrayInfo(props.educations)}
          </div>
        )}

        {props.workplaces.length != 0 && (
          <div className="displayBlock" key="work">
            <h3>Work experience</h3>
            {displayArrayInfo(props.workplaces)}
          </div>
        )}
      </div>
    </>
  );
}

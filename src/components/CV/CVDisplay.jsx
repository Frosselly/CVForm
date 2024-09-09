import "../../styles/display.css";
import displayGeneral from './displayGeneral';
import displayEducation from './displayEducation';
import displayWorkplace from './displayWorkplace';

export default function CVDisplay({ props, onEdit, onNewCV }) {
  
  function displayArrayInfo(data, handler) {
    let displayData = [];
    for (let [index, entry] of data.entries()) {
      const lineBreak = <hr key={'lineBreak'+index}></hr>;
      index > 0 && displayData.push(lineBreak);
      displayData.push(handler(entry))
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
        <div className="displayBlock">
          <h3>General info</h3>
          {displayGeneral(props.GeneralInfo)}
        </div>
)}
        {props.Educations.length != 0 && (
          <div className="displayBlock"  key="edu-info">
            <h3>Educational info</h3>
            {displayArrayInfo(props.Educations, displayEducation)}
          </div>
        )}

        {props.Workplaces.length != 0 && (
          <div className="displayBlock" key="work">
            <h3>Work experience</h3>
            {displayArrayInfo(props.Workplaces, displayWorkplace)}
          </div>
        )}
      </div>
    </>
  );
}

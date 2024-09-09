export default function displayEducation(props){
    return (
        <div className="output">
            <p>School name: </p> <p>{props.schoolName}</p>  
            <p>Title of study: </p> <p>{props.studyTitle}</p>
            <p>Start of study: </p> <p>{props.studyStartDate}</p>  
            <p>End of study: </p> <p>{props.studyEndDate}</p>  
        </div>
    )
}
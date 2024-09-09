export default function displayWorkplace(props){
    return (
        <div className="output">
            <p>Company name: </p> <p>{props.companyName}</p>  
            <p>Position title: </p> <p>{props.positionTitle}</p>
            <p>Main responsibilities: </p> <p>{props.mainResponsibilities}</p> 
            <p>Start date: </p> <p>{props.workStartDate}</p>  
            <p>End date: </p> <p>{props.workEndDate}</p>  
        </div>
    )
}
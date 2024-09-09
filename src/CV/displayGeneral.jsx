export default function displayGeneral(props){
    return (
        <div className="output">
            <p>Name: </p> <p>{props.input}</p>  
            <p>Email: </p> <p>{props.email}</p>
            <p>Phone number: </p> <p>{props.number}</p>  
        </div>
    )
}
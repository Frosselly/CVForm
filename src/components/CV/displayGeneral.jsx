export default function displayGeneral(props) {
  return (
    <div className="output">
      {props.name && (
        <>
          <p>Name: </p> <p>{props.name}</p>
        </>
      )}
      {props.email && (
        <>
          <p>Email: </p> <p>{props.email}</p>
        </>
      )}
      {props.number && (
        <>
          <p>Phone number: </p> <p>{props.number}</p>
        </>
      )}
      {/* <p>Name: </p> <p>{props.name}</p>  
            <p>Email: </p> <p>{props.email}</p>
            <p>Phone number: </p> <p>{props.number}</p>   */}
    </div>
  );
}

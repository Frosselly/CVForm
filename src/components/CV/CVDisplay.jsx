import "../../styles/display.css"

export function CVDisplay({props}){

    function displayGeneralInfo(data){
        let displayData = [];
        for(let [index ,input] of Object.entries(data)){
            const edited = <div className="output">
                <p>{index}:</p> <p>{input}</p>
                </div>
            
            displayData.push(edited);
        }
        return displayData;
    } 
    function displayArrayInfo(data){
        let displayData = [];
        for(let entry of data){
            for(let [index ,input] of Object.entries(entry)){
                const edited = <div className="output">
                <p>{index}:</p> <p>{input}</p>
                </div>
                
                displayData.push(edited);
            }
        }
        return displayData;
    }

    return(
        <>
        <h1>General info</h1>
        <div>
            {displayGeneralInfo(props.general)}
        </div>
        <h1>Educational info</h1>
        <div>
            {displayArrayInfo(props.educations)}
        </div>
        <h1>Practical experience</h1>
        <div>
            {displayArrayInfo(props.workplaces)}
        </div>
        </>
        
    )
}
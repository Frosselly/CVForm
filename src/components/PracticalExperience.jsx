import Input from "./Input";

export default function PracticalExperience({props, onChange}){
    return(
        <div>
            <Input 
                text={"Company name:"}
                id={"companyName"}
                value={props.companyName}
                onChange={onChange}
            />
            <Input 
                text={"Position title"}
                id={"positionTitle"}
                value={props.positionTitle}
                onChange={onChange}
            />
            <Input 
                text={"Main responsibilities"}
                id={"mainResponsibilities"}
                value={props.mainResponsibilities}
                onChange={onChange}
            />
            <Input 
                text={"Start date"}
                id={"workStartDate"}
                value={props.workStartDate}
                type={"date"}
                onChange={onChange}
            />
            <Input 
                text={"End date"}
                id={"workEndDate"}
                value={props.workEndDate}
                type={"date"}
                onChange={onChange}
            />
        </div>
    )
}
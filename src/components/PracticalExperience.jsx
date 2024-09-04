import Input from "./Input";

export default function PracticalExperience({onChange}){
    return(
        <div>
            <Input 
                text={"Company name:"}
                id={"companyName"}
                onChange={onChange}
            />
            <Input 
                text={"Position title"}
                id={"positionTitle"}
                onChange={onChange}
            />
            <Input 
                text={"Main responsibilities"}
                id={"mainResponsibilities"}
                onChange={onChange}
            />
            <Input 
                text={"Start date"}
                id={"workStartDate"}
                type={"date"}
                onChange={onChange}
            />
            <Input 
                text={"End date"}
                id={"workEndDate"}
                type={"date"}
                onChange={onChange}
            />
        </div>
    )
}
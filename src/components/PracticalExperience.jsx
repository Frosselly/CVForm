import Input from "./Input";

export default function PracticalExperience(){
    return(
        <>
            <Input 
                text={"Company name:"}
                id={"companyName"}
            />
            <Input 
                text={"Position title"}
                id={"positionTitle"}
            />
            <Input 
                text={"Main responsibilities"}
                id={"mainResponsibilities"}
            />
            <Input 
                text={"Start date"}
                id={"workStartDate"}
                type={"date"}
            />
            <Input 
                text={"End date"}
                id={"workEndDate"}
                type={"date"}
            />
        </>
    )
}
import Input from "./Input";

export default function PracticalExperience(){
    return(
        <section className="practical">
            <Input 
                text={"Company name:"}
                id={"Company_name"}
            />
            <Input 
                text={"Position title"}
                id={"Position_title"}
            />
            <Input 
                text={"Main responsibilities"}
                id={"Main_responsibilities"}
            />
            <Input 
                text={"Start date"}
                id={"Start_date"}
                type={"date"}
            />
            <Input 
                text={"End date"}
                id={"End_date"}
                type={"date"}
            />
        </section>
    )
}
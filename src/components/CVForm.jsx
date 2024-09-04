import GeneralInfo from "./GeneralInfo"
import EducationalBackground from "./EducationalBackground"
import PracticalExperience from "./PracticalExperience"
import { useState } from "react"

export default function CVform(){

    const [educationsIndex, setEducationsIndex] = useState(0);
    const [workIndex, setWorkIndex] = useState(0);
    const [formData, setFormData] = useState({
        general:{},
        educations:[],
        workplaces:[]
    });

    function onSubmit(e){
        e.preventDefault();
        const newFormData = {
            general:readSection(e, '.General')[0],
            educations:readSection(e, '.education'),
            workplaces:readSection(e, '.practical')
        }
        setFormData(newFormData);
    }
    
    function addEducation(){
        setEducationsIndex(educationsIndex + 1);
    }
    
    function addWorkplace(){
        setWorkIndex(workIndex + 1);
    }

    return(
        <>{console.log(formData)}
        <form onSubmit={onSubmit}>
            <button type="Submit">Submit</button>
            <button type="Button"onClick={addEducation}>Add Education</button>
            <button type="Button"onClick={addWorkplace}>Add Workplace</button>
            <GeneralInfo />
            {Array.from({ length: educationsIndex }).map((_, index) => (
                <EducationalBackground key={"education"+index}/>)
                )}
                {Array.from({ length: workIndex }).map((_, index) => (
                <PracticalExperience key={"practical"+index}/>)
                )}
        </form>
        </>
        
    )
}


function readSection(e, className){
    let data = [];
    const sections = e.target.querySelectorAll(className);
        sections.forEach((section) => {
            let obj = {};
            const inputs = section.querySelectorAll('input, select, textarea');
            inputs.forEach((input) => {
                obj[input.name] = input.value;
            });
            data.push(obj)
        });
    return data;
}
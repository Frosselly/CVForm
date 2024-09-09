import GeneralInfo from "./GeneralInfo"
import EducationalBackground from "./EducationalBackground"
import PracticalExperience from "./PracticalExperience"
import { useState } from "react"

export default function CVform({handleSubmit, data}){

    const [educationsIndex, setEducationsIndex] = useState(0);
    const [workIndex, setWorkIndex] = useState(0);
    const [formData, setFormData] = useState({data});

    function onSubmit(e){
        e.preventDefault();
        const newFormData = {
            general:readSection(e, '.General')[0],
            educations:readSection(e, '.education'),
            workplaces:readSection(e, '.practical')
        }
        setFormData(newFormData);
        handleSubmit(newFormData);
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
            <GeneralInfo data={formData.general}/>
            {Array.from({ length: educationsIndex }).map((_, index) => (
                <EducationalBackground data={formData.educations[index]} key={"education"+index}/>)
                )}
                {Array.from({ length: workIndex }).map((_, index) => (
                <PracticalExperience data={formData.workplaces[index]} key={"practical"+index}/>)
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
                const name = input.name.replace(/_+/g, ' ');
                obj[name] = input.value;
            });
            data.push(obj)
        });
    return data;
}
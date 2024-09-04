import GeneralInfo from "./GeneralInfo"
import EducationalBackground from "./EducationalBackground"
import PracticalExperience from "./PracticalExperience"
import { useState } from "react";

export default function CVform(){
    const [formData, setFormData] = useState({});

    function saveHandler(event){
        if(event === undefined) return;
        
        const { name, value } = event.target;
        
        const newForm = {
            ...formData,
            [name] : value ,
        }
        console.log(newForm)
        setFormData(newForm);
    }

    return(
        <>
            <button>Submit</button>
            <h1>{formData.name && formData.name}</h1>
            <GeneralInfo onChange={saveHandler}/>
            <EducationalBackground onChange={saveHandler}/>
            <PracticalExperience onChange={saveHandler}/>
            
        </>
    )
}
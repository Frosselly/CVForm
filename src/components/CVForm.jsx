import GeneralInfo from "./GeneralInfo"
import EducationalBackground from "./EducationalBackground"
import PracticalExperience from "./PracticalExperience"

export default function CVform(){
    return(
        <>
            <GeneralInfo />
            <EducationalBackground />
            <PracticalExperience />
        </>
    )
}
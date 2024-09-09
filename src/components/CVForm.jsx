import GeneralInfo from "./GeneralInfo";
import EducationalBackground from "./EducationalBackground";
import PracticalExperience from "./PracticalExperience";
import { useState } from "react";

export default function CVform({ handleSubmit, data }) {
  const [formData, setFormData] = useState(data);
  const [educationIndex, setEducationIndex] = useState(data.Educations.length != 0 ? data.Educations.length : 0);
  const [workIndex, setWorkIndex] = useState(data.Workplaces.length != 0 ? data.Workplaces.length : 0);

  function saveGeneral(event) {
    if (event === undefined) return;

    const { name, value } = event.target;

    const newGeneral = {
      ...formData.GeneralInfo,
      [name]: value,
    };
    const newForm = {
      ...formData,
      GeneralInfo: newGeneral,
    };

    setFormData(newForm);
  }

  function saveEducation(event, index) {
    if (event === undefined) return;

    const { name, value } = event.target;

    const newEducation = {
      key: index,
      ...formData.Educations[index],
      [name]: value,
    };
    const newForm = {
      ...formData,
    };
    newForm.Educations[index] = newEducation;

    setFormData(newForm);
  }

  function saveWork(event, index) {
    if (event === undefined) return;

    const { name, value } = event.target;

    const newWorkplace = {
      key: index,
      ...formData.Workplaces[index],
      [name]: value,
    };
    const newForm = {
      ...formData,
    };
    newForm.Workplaces[index] = newWorkplace;

    setFormData(newForm);
  }

  function addEducation() {
    setEducationIndex(educationIndex + 1);
  }
  function addWork() {
    setWorkIndex(workIndex + 1);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(formData);
  }

  const education = {
    schoolName: "",
    studyTitle: "",
    studyStartDate: "",
    studyEndDate: "",
  };

  const work = {
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workStartDate: "",
    workEndDate: ""
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="Submit">Submit</button>
      <button type="Button" onClick={addEducation}>
        Add Education
      </button>
      <button type="Button" onClick={addWork}>
        Add Workplace
      </button>
      <h1>{formData.name && formData.name}</h1>
      <GeneralInfo props={formData.GeneralInfo} onChange={saveGeneral} />
      {Array.from({ length: educationIndex }).map((_, index) => {
        const educationCopy = {
          ...education,
          ...formData.Educations[index],
        };
        return (
          <EducationalBackground
            props={educationCopy}
            onChange={(e) => saveEducation(e, index)}
            key={"education" + index}
          />
        );
      })}
      {/* <EducationalBackground onChange={saveEducation}/> */}
      {/* <PracticalExperience onChange={saveWork}/> */}
      {Array.from({ length: workIndex }).map((_, index) => {
        const workCopy = {
          ...work,
          ...formData.Workplaces[index],
        };
        return (
          <PracticalExperience
            props={workCopy}
            onChange={(e) => saveWork(e, index)}
            key={"work" + index}
          />
        );
      })}
    </form>
  );
}

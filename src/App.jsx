// import { useState } from 'react'
import CVform from "./components/CVForm";
import "./App.css";
import { useState } from "react";
import CVDisplay from "./components/CV/CVDisplay";

function App() {
  const [isFormOpen, setFormOpen] = useState(true);

  const [formData, setFormData] = useState({
    GeneralInfo: {},
    Educations: [],
    Workplaces: []
});

  function handleSubmit(formData) {
    setFormData(formData);
    setFormOpen(!isFormOpen);
  }

  function handleNewCV() {
    setFormData({
      GeneralInfo: {},
      Educations: [],
      Workplaces: []
  })
    setFormOpen(true);
  }

  function handleEdit() {
    console.log(formData);
    setFormOpen(true);
  }

  function addDOM() {
    if (isFormOpen) {
      return <CVform handleSubmit={handleSubmit} data={formData}/>;
    } else {
      return (
        <CVDisplay
          props={formData}
          key={"CVDisplay"}
          onEdit={handleEdit}
          onNewCV={handleNewCV}
        />
      );
    }
  }

  return <>{addDOM()}</>;
}

export default App;

// import { useState } from 'react'
import CVform from './components/CVForm'
import './App.css'
import { useState } from 'react'
import { CVDisplay } from './components/CV/CVDisplay';

function App() {
  const [isFormOpen, setFormOpen] = useState(true)
  const [formData, setFormData] = useState({
    general:{},
    educations:[],
    workplaces:[]
});

  function handleSubmit(formData){
    setFormData(formData);
    setFormOpen(!isFormOpen)
  }

  function addDOM(){
    if(isFormOpen){
      return <CVform handleSubmit={handleSubmit}/>
    }else{
      return <CVDisplay props={formData} key={'CVDisplay'}/>
    }
  }

  return (
    <>
    {
      addDOM()
        
    }
    </>
  )
}

export default App

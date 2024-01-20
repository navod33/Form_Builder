import React, {Component, useContext} from "react"
import FirstStep from "./Components/invitaionStep/FirstStep"
import SecondStep from "./Components/invitaionStep/SecondStep"
import ThirdStep from "./Components/invitaionStep/ThirdStep"
import { Stepper, StepLabel, Step } from "@mui/material"
import { multiStepContex } from "./Components/Context/StepContext/StepContext"
import { ComponentProvider } from "./Components/Context/componentContext"



export default function App() {

const { currentStep, finalData } = useContext(multiStepContex);

  function showStep(step){
    switch(step){
      case 1 : 
        return <FirstStep/>
      case 2 : 
        return <SecondStep/>
      case 3 : 
        return <ThirdStep/>
    }
  }

  return (
    <ComponentProvider>
    <div className="app">
      <header className="App-header gap-10">
          <h3  className ="center-stepper" style={{ color: 'red', textDecoration: 'underline' }}>React js multiStep Form Builder</h3>
          <div className="center-stepper">
            <Stepper style={{ width: '18%'}} activeStep={currentStep - 1} orientation="horizontal" >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel> 
              </Step>
            </Stepper>
            
          </div>
          <div className="center-stepper">
          {showStep(currentStep)}
          </div>
        
      </header>
     
    </div>
    </ComponentProvider>

  )
}
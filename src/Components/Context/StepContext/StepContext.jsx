import React, { useState } from 'react'
import App from '../../../App';

export const multiStepContex = React.createContext();

const StepContext = () => {
    const [currentStep, setStep ] = useState(1);
    const [userData, setUserData ] = useState([]);
    const [finalData, setFinalData ] =useState([]);


  return (
    
        <multiStepContex.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData }} >
            <App/>
        </multiStepContex.Provider>

  )
}

export default StepContext;
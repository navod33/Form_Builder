import React, { useContext } from 'react'
import { Button, TextField } from "@mui/material";
import { multiStepContex } from '../Context/StepContext/StepContext';

function FirstStep() {
    const { setStep, userData, setUserData} = useContext(multiStepContex);
    console.log(userData)
    
  return (
    <div>
        <div>
        <TextField label="form name"  value={userData['firstname'] || ''} onChange={ (e) => setUserData({...userData, "firstname": e.target.value } ) } margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
        <Button variant='contained' onClick={ () => setStep(2) } color='primary'>Next</Button> 
        </div>
    </div>
  )
}

export default FirstStep
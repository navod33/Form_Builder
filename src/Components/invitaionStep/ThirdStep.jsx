
import { Button, TextField } from "@mui/material";
import React, { useContext } from 'react'
import { multiStepContex } from '../Context/StepContext/StepContext';
import { renderProptiyFields } from "../../Utils/renderFields";
import { useComponentContext } from "../Context/componentContext/index";
import Properties from "../formElements/Properties/index";



function ThirdStep() {

  const { setStep, userData, setUserData} = useContext(multiStepContex);
  const { selectedComponent } = useComponentContext();
  const { components } = useComponentContext();
  console.log(components);

  return (
  // <div>
  // <div>
  //     <h2 className="text-white text-2xl mb-4">Review Your Form</h2>
      
 
  //     {/* Display final form data */}
  //     <div className="mb-4">
  //       <h3 className="text-white text-lg mb-2">Final Form Data:</h3>
  //       {userData.map((component) => (
  //         <div key={component.id}>
  //           <h4 className="text-white">{component.type}</h4>
  //           <Properties fields={renderProptiyFields(selectedComponent)} component={component} />
  //         </div>
  //       ))}
  //     </div>
  //       </div>

  //   </div>
  <div>
      <h1>Completed</h1>
      <div className="mb-4">
        <h3 className="text-white text-lg mb-2">User Information:</h3>
         <p>Form Name: {userData.firstname}</p>   
     </div>
     <div className="mb-4">
  <h3 className="text-black text-lg mb-2">Filled Data:</h3>
  <table className="border-collapse w-full">
    <thead>
      <tr>
        <th className="border px-4 py-2">input Type</th>
        <th className="border px-4 py-2">label</th>
        <th className="border px-4 py-2">placeholder</th>
      </tr>
    </thead>
    <tbody>
      {components.map((component) => (
        <tr key={component.id} className="border">
          <td className="border px-4 py-2">{component.type}</td>
          <td className="border px-4 py-2">{component.properties.label}</td>
          <td className="border px-4 py-2">{component.properties.placeholder}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


     <Button variant='contained'  onClick={ () => setStep(2) } color='secondary'>BAck</Button> <span></span>


  </div>
  )
}

export default ThirdStep
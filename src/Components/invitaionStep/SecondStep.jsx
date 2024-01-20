import React , {useContext}  from 'react'
import { Button, TextField } from "@mui/material";
import { multiStepContex } from '../Context/StepContext/StepContext';
import SidePanel from "../Container/SidePanel/index";
import ControlPanel from "../Container/ControlPanel/index";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { useComponentContext } from "../Context/componentContext/index";
import PropertyPanel from "../Container/PropertyPanel/index";

function SecondStep() {

    const { setStep, userData, setUserData} = useContext(multiStepContex);
    const { onDragEnd } = useComponentContext();

  return (
    <div>
   <div className="w-screen h-screen flex">
      <DndContext onDragEnd={onDragEnd}>
        <SidePanel components={["Button", "Input" , "Dropdown"]} />
        <ControlPanel/>
        <PropertyPanel/>
      </DndContext>
    </div>
        <div className='center-stepper flex flex-row gap-5 mx-5 my-5'>
        <Button variant='contained'  onClick={ () => setStep(1) } color='secondary'>BAck</Button> <span></span>
        <Button variant='contained'  onClick={ () => setStep(3) } color='primary'>Next</Button> 
        </div>
    </div>
  )
}

export default SecondStep
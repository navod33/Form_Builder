import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Input from "../../../Components/formElements/Input/index";
import Button from "../../../Components/formElements/Button/index";
import Dropdown from "../../../Components/formElements/Dropdown/index";



import { useComponentContext } from "../../Context/componentContext/index";


const RenderComponent = ({ component }) => {
  if (component.type.toLowerCase() === "button") {
    return <Button {...component.properties} />;
  } else if (component.type.toLowerCase() === "input") {
    return <Input {...component.properties} />;
  }else if (component.type.toLowerCase() === "dropdown") {
    return <Dropdown {...component.properties} />;
  }
  return <Button title="button" />;
};

const ControlPanel = () => {
  const { components: draggedComponents, setSelectedComponent } =
    useComponentContext();
  const { isOver, setNodeRef } = useDroppable({ id: "drop-container" });
  return (
    <div
      ref={setNodeRef}
      className={
        isOver
          ? "w-6/12 bg-gray-600 overflow-y-scroll"
          : "w-6/12 bg-gray-800 overflow-y-scroll"
      }
    >
      <div className="list flex items-center justify-center mx-auto py-10 overflow-scroll w-8/12 space-y-6 flex-col">
        {draggedComponents &&
          draggedComponents.length > 0 &&
          draggedComponents.map((component, index) => (
            <div
              key={index}
              onClick={(e) => setSelectedComponent(component)}
              className={"py-1 relative px-2 border-2 w-full"}
            >
              <div className="absolute top-0 left-0 opacity-5 z-50 w-full h-full bg-white" />
              <RenderComponent component={component} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ControlPanel;

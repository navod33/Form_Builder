import React, { createContext, useContext, useState } from "react";
// import { DragEndEvent } from "@dnd-kit/core";

const Context = createContext(null);

const ComponentProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState();

  const onDragEnd = (event) => {
    if (event.active.data.current) {
      setComponents((prev) => [...prev, event.active?.data.current]);
    }
  };

  const deleteComponent = () => {
    const filteredComponents = components.filter(
      (_component) => _component.id !== selectedComponent?.id
    );
    setComponents(filteredComponents);
    setSelectedComponent(undefined);
  };

  const updateProperties = (id, field, value) => {
    const updatedComponents = [...components].map((component) => {
      if (component.id === id) {
        return {
          ...component,
          properties: {
            ...component.properties,
            [field]: value,
          },
        };
      }
      return component;
    });
    setComponents(updatedComponents);
  };

  const value = {
    components,
    selectedComponent,
    onDragEnd,
    setSelectedComponent,
    deleteComponent,
    updateProperties,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useComponentContext = () => {
  const context = useContext(Context);
  if (!!context) {
    return context;
  } else {
    throw new Error("Context not supported");
  }
};

export { ComponentProvider, useComponentContext };

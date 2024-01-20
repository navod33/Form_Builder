import React from "react";
import cuid from "cuid";
import { useDraggable } from "@dnd-kit/core";
import { useComponentContext } from "../../Context/componentContext/index";
import { COMPONENT } from "../../../types";

const Component = ({ title }) => {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: `${COMPONENT}-${title}`,
    data: { type: title, id: cuid(), properties: {} },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="component px-4 py-2 text-center text-white font-bold text-lg bg-blue-400 mx-6 mb-5"
    >
      {title}
    </div>
  );
};

const SidePanel = ({ components }) => {

  return (
    <div className="w-3/12 bg-zinc-200">
      <div className="my-10">
        <p className="text-center px-2 mt-20 text-xl font-bold">
          Drag and Drop the component to Control Panel to add to the form
        </p>
      </div>
      <div className="" id="componets">
        {components.map((component) => (
          <Component key={component} title={component} />
        ))}
      </div>
    </div>
  );
};

export default SidePanel;

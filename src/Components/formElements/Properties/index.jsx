import React from "react";
import { useComponentContext } from "../../Context/componentContext/index";

const renderFields = (fields, component, onChange) => {
  return fields.map((field) => {
    return (
      <div key={`${component.id}-${field}`} className="w-full flex flex-col">
        <label className="text-lg">{`Enter ${field}`}</label>
        <input
          onChange={onChange}
          name={`${component.id}-${field}`}
          placeholder={`Ex: some ${field}`}
          className={"py-1 px-2 rounded-md mt-1"}
        />
      </div>
    );
  });
};

const Properties = ({ fields, component }) => {
  const { deleteComponent, updateProperties } = useComponentContext();
  const onChangeField = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const [id, field] = name?.split("-");
    updateProperties(id, field, value);
  };
  return (
    <div className="m-4 w-full flex-col flex">
      <div className="flex justify-between">
        <button
          onClick={deleteComponent}
          className="text-white bg-red-600 rounded-md hover:bg-red-700 border-2 border-red-600 py-1 px-2 w-5/12 h-max"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col space-y-5 mt-10">
        {renderFields(fields, component, onChangeField)}
      </div>
    </div>
  );
};

export default Properties;

import React from "react";
import Properties from "../../formElements/Properties/index";
import { useComponentContext } from "../../Context/componentContext/index";

import { renderProptiyFields } from "../../../Utils/renderFields";

const PropertyPanel = () => {
  const { selectedComponent } = useComponentContext();
  return (
    <section className="bg-gray-500 w-3/12 flex overflow-scroll">
      {selectedComponent ? (
        <Properties
          component={selectedComponent}
          fields={renderProptiyFields(selectedComponent)}
        />
      ) : (
        <p className="my-auto text-center font-bold text-lg mx-10 text-black">
          Select any component to edit its Properties
        </p>
      )}
    </section>
  );
};

export default PropertyPanel;

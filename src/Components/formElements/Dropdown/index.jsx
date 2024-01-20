import React from 'react';

const Dropdown = ({ label }) => {
  const genderOptions = ['Male', 'Female', 'other'];

  return (
    <div className="relative flex flex-col w-full">
      {label && <label className="text-white mb-1">{label}</label>}
      <select className="px-2 py-2 w-full rounded-md outline-none">
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
import React from 'react';

const FilterButtons = ({ filters }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

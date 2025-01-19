import React from 'react';
import searchIcon from './assets/search.svg';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={searchIcon} alt="Search" className="w-6 h-6" />
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;

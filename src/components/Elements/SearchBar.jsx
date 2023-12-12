import React from "react";
import SearchIcon from "./Icon/SearchIcon";

const SearchBar = (props) => {
  const { onSearch, style } = props;
  return (
    <div className="flex items-center">
      <button className={`absolute ${style}`}>
        <SearchIcon />
      </button>

      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        className="bg-white h-10 px-8 rounded-xl  focus:outline-none border border-[#8B8B8B] w-64 text-[16px] placeholder-black"
      />
    </div>
  );
};

export default SearchBar;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "../global/global.css";
import useDebounce from "./debounce";

const SearchBar = ({ setSearchTitle }) => {
  const inputRef = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearchTitle(inputRef.current.value);
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        id="search-input"
        placeholder="Search for a Movie"
        ref={inputRef}
        onKeyDown={handleEnter}
        onChange={(e) => setSearchTitle(e.target.value)}
      ></input>
      <button className="search-btn">
        <FaSearch id="search-icon" size={10} />
      </button>
    </div>
  );
};

export default SearchBar;

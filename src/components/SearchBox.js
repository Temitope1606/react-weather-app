// import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ city, setCity, onSearch }) => {
  // To fetch the weather data once 'Enter' button is clicked
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-city"
        placeholder="Enter a City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-btn" onClick={onSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;

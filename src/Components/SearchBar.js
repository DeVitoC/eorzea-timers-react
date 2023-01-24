import React from "react";

export default function SearchBar({ searchChange }) {
  return (
    <div className="pa0 mt0">
      <input
        className="w-90"
        type="search"
        placeholder="Search by name"
        onChange={ searchChange }
      />
    </div>
  );
}
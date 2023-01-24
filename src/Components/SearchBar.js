import React from "react";

export default function SearchBar({ searchChange }) {
  return (
    <div className="pa0 mt0">
      <input
        type="search"
        placeholder="Name"
        onChange={ searchChange }
      />
    </div>
  );
}
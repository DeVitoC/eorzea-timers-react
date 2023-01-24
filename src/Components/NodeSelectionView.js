import React, { useState, useEffect } from "react";
import EorzeaClock from "./EorzeaClock";
import MobileHeader from "./Headers/MobileHeader";
import SearchBar from "./SearchBar";
import SortMenuMobile from "./SortMenuMobile";

function NodeSelectionView({ profession }) {
  const [searchField, setSearchField] = useState("")

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  return (
    <div className="tc">
      <MobileHeader />
      <EorzeaClock labelType="p" />
      <SortMenuMobile />
      <SearchBar searchChange={ onSearchChange } />
    </div>
  );
}

export default NodeSelectionView;
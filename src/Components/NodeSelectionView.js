import React, { useState, useEffect } from "react";
import EorzeaClock from "./EorzeaClock";
import GatheringNodeList from "./GatheringNodeList";
import MobileHeader from "./Headers/MobileHeader";
import NodeScrollList from "./NodeScrollList";
import SearchBar from "./SearchBar";
import SortMenuMobile from "./SortMenuMobile";

function NodeSelectionView({ profession }) {
  const [searchField, setSearchField] = useState("")

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const nodeList = [
    {
      name: "Gold",
      time: Date.now,
      location: "Somewhere",
      img: "",
      description: "Gold Ore",
      type: "Ore",
      source: "Mining",
      level: 20,
      stars: 1,
      x: 23.4,
      y: 45.3,
      expac: "hw"
    },
  ]

  return (
    <div className="tc w-100">
      <MobileHeader />
      <EorzeaClock labelType="p" />
      <SortMenuMobile />
      <SearchBar searchChange={ onSearchChange } />
      <NodeScrollList className="w-100">
        <GatheringNodeList nodes={ nodeList } />
      </NodeScrollList>
    </div>
  );
}

export default NodeSelectionView;
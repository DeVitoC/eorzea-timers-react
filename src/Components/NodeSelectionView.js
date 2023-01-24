import React from "react";
import EorzeaClock from "./EorzeaClock";
import MobileHeader from "./Headers/MobileHeader";
import SortMenuMobile from "./SortMenuMobile";

function NodeSelectionView({ profession }) {
  return (
    <div className="tc">
      <MobileHeader />
      <EorzeaClock labelType="p" />
      <SortMenuMobile />
    </div>
  );
}

export default NodeSelectionView;
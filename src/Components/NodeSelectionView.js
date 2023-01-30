import React, { useState, useEffect } from "react";
import EorzeaClock from "./EorzeaClock";
import GatheringNodeList from "./GatheringNodeList";
import MobileHeader from "./Headers/MobileHeader";
import NodeScrollList from "./NodeScrollList";
import SearchBar from "./SearchBar";
import SortMenuMobile from "./SortMenuMobile";
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAPYSgNJDOe2BPNTjlEcYiz6kzI82sG1WE",
//   authDomain: "timersimages.firebaseapp.com",
//   projectId: "timersimages",
//   storageBucket: "timersimages.appspot.com",
//   messagingSenderId: "715020355745",
//   appId: "1:715020355745:web:d8af2080ce5d5b404d88e0"
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app)
// // const goldOreRef = ref(storage, "GoldOre.jpg");
// const goldOreURL = getDownloadURL(ref(storage, "GoldOre.jpg")).then((url) => {
//   return url;
// });

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
    <div className="tc">
      <MobileHeader />
      <EorzeaClock labelType="p" />
      <SortMenuMobile />
      <SearchBar searchChange={ onSearchChange } />
      <NodeScrollList>
        <GatheringNodeList nodes={ nodeList } />
      </NodeScrollList>
    </div>
  );
}

export default NodeSelectionView;
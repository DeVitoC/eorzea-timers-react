import React, { useState, useEffect, useRef } from "react";
import SegmentedControl from "./SegmentedControl";

export default function SortMenuMobile() {
  return (
    <div className="mt0">
      <div className="flex ml3">
        <p className="white mr1">Expac: </p>
        <SegmentedControl 
          name="expac selections"
          callback={(val) => console.log(val)}
          defaultIndex={0}
          controlRef={ useRef() }
          segments={[
            {
              label: "All",
              value: "all",
              ref: useRef()
            },
            {
              label: "ARR",
              value: "arr",
              ref: useRef()
            },
            {
              label: "HW",
              value: "hw",
              ref: useRef()
            },
            {
              label: "SB",
              value: "sb",
              ref: useRef()
            },
            {
              label: "ShB",
              value: "shb",
              ref: useRef()
            },
            {
              label: "EW",
              value: "ew",
              ref: useRef()
            },
          ]}
        />
      </div>
      <div className="flex ml3">
        <p className="white mr1">Sort by: </p>
        <SegmentedControl 
          name="sort selections"
          callback={(val) => console.log(val)}
          defaultIndex={0}
          controlRef={ useRef() }
          segments={[
            {
              label: "Name",
              value: "name",
              ref: useRef()
            },
            {
              label: "Time",
              value: "time",
              ref: useRef()
            },
            {
              label: "Zone",
              value: "zone",
              ref: useRef()
            },
          ]}
        />
      </div>
    </div>
  )
}
import React from "react";

export default function NodeScrollList(props) {
  return (
    <div className="w-100" style={{overflowY: "scroll", border: "1px solid black", height: "800px"}}>
      {props.children}
    </div>
  );
}
import React from "react";

export default function NodeScrollList(props) {
  return (
    <div style={{overflowY: "scroll", border: "1px solid black", height: "800px"}}>
      {props.children}
    </div>
  );
}
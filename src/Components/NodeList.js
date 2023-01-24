import React from "react";

export default function NodeList({ nodes }) {
  return (
    <div>
      {
        nodes.map((node, i) => {
          return (
            <div>hello</div>
          );
        });
      }
    </div>
  );
}
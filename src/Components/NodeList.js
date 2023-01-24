import React from "react";
import GatheringNode from "./GatheringNode";

export default function NodeList({ nodes }) {
  return (
    <div>
      {
        nodes.map((node, i) => {
          return (
            <GatheringNode 
              name={node.name}
              time={node.time}
              location={node.location}
              img={node.img}
              description={node.description}
              type={node.type}
              source={node.source}
              level={node.level}
              stars={node.stars}
              x={node.x}
              y={node.y}
              expac={node.expac}
            />
          );
        })
      }
    </div>
  );
}
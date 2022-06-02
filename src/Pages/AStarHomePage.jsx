import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import makeNodes from "../scripts/makeNodes";
import changeColor from "../scripts/colorNodes";
import AStarAlgorithm from "../components/AStarVisualiser/AStarAlgorithm";

function AStar() {
  const ROW = 20;
  const COL = 30;

  /* ON START */
  const [grid, setNodes] = useState([]);
  useEffect(() => {
    setNodes(makeNodes(algorithmParams));
  }, []);

  const getInitialParams = () => {
    return {
      algorithm: 1,
      algorithmStatus: 0,
      startSelected: false,
      endSelected: false,
      startRow: -1,
      startCol: -1,
      endRow: -1,
      endCol: -1,
      nRow: ROW,
      nCol: COL,
    };
  };

  let algorithmParams = getInitialParams();

  const resetAStar = () => {
    algorithmParams = getInitialParams();
    setNodes(makeNodes(algorithmParams));
  };

  const randomAStar = () => {
    setNodes(makeNodes(algorithmParams, 1));
    algorithmParams = getInitialParams();
  };

  const startAStar = () => {
    if (!algorithmParams.endSelected || !algorithmParams.startSelected) {
      alert("Start Conditions Not Met");
      return;
    }

    // console.log("button clicked");
    var returnObject = AStarAlgorithm(grid, algorithmParams);
    console.log(returnObject);
    var path = returnObject.path;
    var visitedNodes = returnObject.visitedNodes;
    changeColor(grid, path, visitedNodes, setNodes);
  };

  return (
    <Map
      grid={grid}
      algorithmParams={algorithmParams}
      start={startAStar}
      reset={resetAStar}
      randomBlock={randomAStar}
    />
  );
}

export default AStar;

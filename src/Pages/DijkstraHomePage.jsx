import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import makeNodes from "../scripts/makeNodes";
import changeColor from "../scripts/colorNodes";
import DijkstraAlgorithm from "../components/DijkstraVisualiser/DijkstraAlgorithm";
import mazeGenerator from "../components/MazeGenerator/MazeGenerator";
import generateMaze from "../scripts/generateMaze";

function DijkstraHome() {
  const ROW = 20;
  const COL = 30;

  /* ON START */
  const [grid, setNodes] = useState([]);
  useEffect(() => {
    setNodes(makeNodes(algorithmParams));
  }, []);

  const getInitialParams = () => {
    return {
      algorithm: 0,
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

  const randomWeightedDijkstra = () => {
    setNodes(makeNodes(algorithmParams, 2));
    algorithmParams = getInitialParams();
  };

  const randomDijkstra = () => {
    setNodes(makeNodes(algorithmParams, 1));
    algorithmParams = getInitialParams();
  };

  const resetDijkstra = () => {
    setNodes(makeNodes(algorithmParams));
    algorithmParams = getInitialParams();
  };

  const startDijkstra = () => {
    // console.log("button clicked");

    if (!algorithmParams.endSelected || !algorithmParams.startSelected) {
      alert("Start Conditions Not Met");
      return;
    }

    var returnObject = DijkstraAlgorithm(grid, algorithmParams);
    console.log(returnObject);
    var path = returnObject.path;
    var visitedNodes = returnObject.visitedNodes;
    changeColor(grid, path, visitedNodes, setNodes);
  };

  const randomMazeGen = () => {
    // setNodes(makeNodes(algorithmParams, 0, true));
    let [maze, walls] = mazeGenerator(grid, algorithmParams);
    console.log(maze);
    generateMaze(maze, algorithmParams, setNodes);
    // console.log(walls);
  };

  return (
    <Map
      grid={grid}
      algorithmParams={algorithmParams}
      start={startDijkstra}
      reset={resetDijkstra}
      randomBlock={randomDijkstra}
      randomWeighted={randomWeightedDijkstra}
      randomMaze={randomMazeGen}
    />
  );
}

export default DijkstraHome;

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Node from "./Node";
import DijkstraAlgorithm from "../../scripts/DijkstraAlgorithm";

function Map() {
  const ROW = 20;
  const COL = 30;

  let algorithmParams = {
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

  const getWeight = () => {
    if (Math.random() > 0.8) {
      return 999;
    } else {
      return 1;
    }
  };

  const getRandomWeight = () => {
    return Math.floor(Math.random() * 100);
  };

  const makeNode = (row, col, nodeID, weight = 1) => {
    return {
      rowId: row,
      colId: col,
      id: nodeID,
      value: 1,
      isStart: false,
      isEnd: false,
      weight: weight,
      parent: null,
      visited: 0,
      color: "white",
    };
  };

  const makeNodes = (flag = 0) => {
    let initalNodes = [];
    let totalNode = 0;

    for (let i = 0; i < ROW; i++) {
      let nodeRow = [];
      for (let j = 0; j < COL; j++) {
        totalNode++;
        let weight;
        if (flag === 1) weight = getWeight();
        if (flag === 2) weight = getRandomWeight();
        let node = makeNode(i, j, totalNode - 1, weight);
        nodeRow.push(node);
      }
      initalNodes.push(nodeRow);
    }

    return initalNodes;
  };

  const [grid, setNodes] = useState([]);
  /* ON START */
  useEffect(() => {
    setNodes(makeNodes());
  }, []);

  const randomWeightedDijkstra = () => {
    setNodes(makeNodes(2));
    algorithmParams = {
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

  const randomDijkstra = () => {
    setNodes(makeNodes(1));
    algorithmParams = {
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

  const resetDijkstra = () => {
    setNodes(makeNodes());
    algorithmParams = {
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

  const clonedGrid = (grid) => {
    return grid.map(function (arr) {
      return arr.slice();
    });
  };
  //visitedNodes-> array of nodes in visisted order , newGrid-> a cloned version of grid(2D array of nodes)
  const colorVisited = (visitedNodes, newGrid) => {
    if (visitedNodes.length !== 0) {
      for (let i = 0; i < visitedNodes.length; i++) {
        const node = visitedNodes[i];
        console.log(node.id);
        let newNode = {
          ...node,
          color: "yellow",
        };
        newGrid[node.rowId][node.colId] = newNode;
        setNodes(newGrid);
      }
    }
  };

  const colorPath = (path, newGrid) => {
    if (path.length !== 0) {
      for (let i = 0; i < path.length; i++) {
        const node = path[i];
        console.log(node.id);
        let newNode = {
          ...node,
          color: "deeppink",
          visited: 2,
        };
        newGrid[node.rowId][node.colId] = newNode;
        setNodes(newGrid);
      }
    }
  };
  const changeColor = async (path, visitedNodes, newGrid) => {
    colorVisited(visitedNodes, newGrid);
    colorPath(path, newGrid);
    // console.log(newGrid);
  };

  const startDijkstra = () => {
    // console.log("button clicked");
    var retObject = DijkstraAlgorithm(grid, algorithmParams);
    var path = retObject.path;
    var visitedNodes = retObject.visitedNodes;
    var newGrid = clonedGrid(grid);
    changeColor(path, visitedNodes, newGrid);
  };

  return (
    <Grid>
      <InnerGrid>
        {grid.map((nodeRow, rowIndex) => {
          return (
            <NodeRow key={rowIndex}>
              {nodeRow.map((node, nodeIndex) => {
                return (
                  <Node
                    key={nodeIndex}
                    data={node}
                    algorithmParams={algorithmParams}
                  />
                );
              })}
            </NodeRow>
          );
        })}
      </InnerGrid>
      <Control>
        <DijkstraStart onClick={startDijkstra}>Start</DijkstraStart>
        <DijkstraReset onClick={resetDijkstra}>Reset</DijkstraReset>
        <DijkstraRandom onClick={randomDijkstra}>Random</DijkstraRandom>
        <DijkstraRandomWeighted onClick={randomWeightedDijkstra}>
          Random Weight
        </DijkstraRandomWeighted>
      </Control>
    </Grid>
  );
}

export default Map;

const Grid = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%; //CHANGE THIS LATER!!!
  position: relative;
  margin: 20px;
  padding: 20px;
`;

const InnerGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
`;
const NodeRow = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

const ToggleWeight = styled.button`
  font-size: 1.2rem;
  padding: 8px;
  margin-top: 12px;
  width: 6rem;
  background-color: #ff00ea;
  border: 3px solid black;
`;
const DijkstraReset = styled.button`
  font-size: 1.2rem;
  padding: 8px;
  margin-top: 12px;
  width: 6rem;
  background-color: #733a3a;
  border: 3px solid black;
`;

const DijkstraRandom = styled.button`
  font-size: 1.2rem;
  width: 6rem;
  padding: 8px;
  margin-top: 12px;
  background-color: #3a4073;
  border: 3px solid black;
`;

const DijkstraRandomWeighted = styled.button`
  font-size: 1.2rem;
  width: 6rem;
  padding: 8px;
  margin-top: 12px;
  background-color: #3a7366;
  border: 3px solid black;
`;
const DijkstraStart = styled.button`
  font-size: 1.2rem;
  width: 6rem;
  padding: 8px;
  margin-top: 12px;
  background-color: #3a733a;
  border: 3px solid black;
`;

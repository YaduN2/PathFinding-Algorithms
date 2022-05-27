import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Node from "./Node";
import DijkstraAlgorithm from "../../scripts/DijkstraAlgorithm";

function Map() {
  const ROW = 7;
  const COL = 24;

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
      nodeStatus: -1,
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
        if (flag === 1) {
          weight = getWeight();
        }
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

  const randomDijkstra = () => {
    console.log("DACHU IS A MONKEY");
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
    console.log("DACHU IS A DONKEY");
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

  const startDijkstra = () => {
    // console.log("button clicked");
    var retObject = DijkstraAlgorithm(grid, algorithmParams);
    var path = retObject.path;
    var visitedNodes = retObject.visitedNodes;

    if (path.length !== 0) {
      var newGrid = grid.map(function (arr) {
        return arr.slice();
      });
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

  return (
    <Grid>
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
      <DijkstraStart onClick={startDijkstra}>Start</DijkstraStart>
      <DijkstraReset onClick={resetDijkstra}>Reset</DijkstraReset>
      <DijkstraRandom onClick={randomDijkstra}>Random</DijkstraRandom>
    </Grid>
  );
}

export default Map;

const Grid = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; //CHANGE THIS LATER!!!
`;

const NodeRow = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
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
const DijkstraStart = styled.button`
  font-size: 1.2rem;
  width: 6rem;
  padding: 8px;
  margin-top: 12px;
  background-color: #3a733a;
  border: 3px solid black;
`;

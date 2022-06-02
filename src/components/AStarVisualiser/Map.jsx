import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Node from "../Node";
import "./Map.css";
import AStar from "../../scripts/AStarAlgorithm";

function Map() {
  const ROW = 20;
  const COL = 30;
  let algorithmParams = {
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

  const getRandomBlocks = () => {
    if (Math.random() > 0.8) {
      return true;
    } else {
      return false;
    }
  };

  const getRandomWeight = () => {
    return Math.floor(Math.random() * 100);
  };

  const makeNode = (row, col, nodeID, weight = 1, block = false) => {
    return {
      rowId: row,
      colId: col,
      id: nodeID,
      value: 1,
      isStart: false,
      isEnd: false,
      isBlock: block,
      weight: weight,
      parent: null,
      visited: 0,
      color: "white",
      valueF: 0,
      valueG: 0,
      valueH: 0,
      display: "",
    };
  };

  const makeNodes = (flag = 0) => {
    let initalNodes = [];
    let totalNode = 0;

    for (let i = 0; i < ROW; i++) {
      let nodeRow = [];
      for (let j = 0; j < COL; j++) {
        totalNode++;
        let weight, block;
        if (flag === 1) block = getRandomBlocks();
        if (flag === 2) weight = getRandomWeight();
        let node = makeNode(i, j, totalNode - 1, weight, block);
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

  const clonedGrid = (grid) => {
    return grid.map(function (arr) {
      return arr.slice();
    });
  };

  const resetAStar = () => {
    algorithmParams = {
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
    setNodes(makeNodes());
  };

  const randomAStar = () => {
    setNodes(makeNodes(1));
    algorithmParams = {
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

  //visitedNodes-> array of nodes in visisted order , newGrid-> a cloned version of grid(2D array of nodes)

  const locateNode = (visitedNodes) => {
    if (visitedNodes.length !== 0) {
      for (let i = 0; i < visitedNodes.length; i++) {
        setTimeout(() => {
          let newGrid = clonedGrid(grid);
          const node = visitedNodes[i];
          // console.log(node.id);
          const newNode = {
            ...node,
            color: "yellow",
          };
          newGrid[node.rowId][node.colId] = newNode;
          setNodes(newGrid);
          // console.log(newGrid);
        }, 50 * i);
      }
    }
  };

  const colorVisited = (visitedNodes, newGrid) => {
    if (visitedNodes.length !== 0) {
      for (let i = 0; i < visitedNodes.length; i++) {
        const node = visitedNodes[i];
        // console.log(node.id);
        const newNode = {
          ...node,
          color: "yellow",
        };
        newGrid[node.rowId][node.colId] = newNode;
        setNodes(newGrid);
        // console.log(newGrid);
      }
    }
  };

  const colorPath = (path, newGrid) => {
    for (let i = 0; i < path.length; i++) {
      const node = path[i];
      // console.log(node.id);
      let newNode = {
        ...node,
        color: "deeppink",
        visited: 2,
      };
      newGrid[node.rowId][node.colId] = newNode;
      setNodes(newGrid);
    }
  };

  const changeC = (path, visitedNodes, newGrid) => {
    locateNode(visitedNodes);
    setTimeout(() => {
      if (path.length === 0) alert("PATH NOT FOUND!");
      colorVisited(visitedNodes, newGrid);
      colorPath(path, newGrid);
    }, 50 * visitedNodes.length);
  };

  const test = () => {};
  const startAStar = () => {
    if (!algorithmParams.endSelected || !algorithmParams.startSelected) {
      console.log("Start Conditions Not Met");
      alert("Start Conditions Not Met");
      return;
    }
    // console.log("button clicked");
    var retObject = AStar(grid, algorithmParams);
    console.log(retObject);
    var path = retObject.path;
    var visitedNodes = retObject.visitedNodes;
    var newGrid = clonedGrid(grid);
    changeC(path, visitedNodes, newGrid);
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
        <DijkstraStartBtn
          onClick={startAStar}
          className="button"
          style={{ backgroundColor: "#3a733a" }}
        >
          Start
        </DijkstraStartBtn>
        <DijkstraResetBtn
          onClick={resetAStar}
          className="button"
          style={{ backgroundColor: "#733a3a" }}
        >
          Reset
        </DijkstraResetBtn>
        <DijkstraRandomBtn
          onClick={randomAStar}
          className="button"
          style={{ backgroundColor: "#3a4073" }}
        >
          Random Blocks
        </DijkstraRandomBtn>
        {/* <DijkstraRandomWeightedBtn
          onClick={test}
          className="button"
          style={{ backgroundColor: "#3a7366" }}
        >
          Random Weight
        </DijkstraRandomWeightedBtn> */}
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

const ToggleWeight = styled.button``;
const DijkstraResetBtn = styled.button``;
const DijkstraRandomBtn = styled.button``;
const DijkstraRandomWeightedBtn = styled.button``;
const DijkstraStartBtn = styled.button``;

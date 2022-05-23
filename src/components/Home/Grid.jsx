import React from "react";
import styled from "styled-components";
import Node from "./Node";

function Grid() {
  /* Make an row * col grid  */

  const nodeGrid = () => {
    const row = 4;
    const col = 4;
    // contains all the nodes of the grid, 2D array -> nodes[col][row]
    const nodes = [];

    for (let rowID = 0; rowID < row; rowID++) {
      let nodeRow = [];
      for (let colID = 0; colID < col; colID++) {
        let node = {
          col: colID,
          row: rowID,
          id: rowID + " " + colID,
        };
        nodeRow.push(node);
      }
      nodes.push(nodeRow);
    }
    /* Object containing information about START node and END node will get updated if they are selected */
    let initialPoints = {
      start: false,
      end: false,
      startRow: -1,
      startCol: -1,
      endRow: -1,
      endCol: -1,
    };

    /* RENDER THE COMPONENTS */

    return nodes.map((nodesInRow, nodeRowIndex) => {
      return (
        <NodeRow key={nodeRowIndex}>
          {nodesInRow.map((node, nodeIndex) => {
            return (
              <Node key={nodeIndex} data={node} initialPoints={initialPoints} />
            );
          })}
        </NodeRow>
      );
    });
  };

  // const getRowButton = () => {
  //   const nodesRow = [1, 2, 3, 4, 5];
  //   return nodesRow.map((num) => {
  //     return <button>{num}</button>;
  //   });
  // };

  return <GridMap>{nodeGrid()}</GridMap>;
}

export default Grid;

const GridMap = styled.div`
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

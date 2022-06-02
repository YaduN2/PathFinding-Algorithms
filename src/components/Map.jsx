import React from "react";
import styled from "styled-components";
import Node from "./Node";
import Control from "./Control";

function Map({
  grid,
  algorithmParams,
  start,
  reset,
  randomBlock,
  randomWeighted,
}) {
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
      <Control
        start={start}
        reset={reset}
        randomBlock={randomBlock}
        randomWeight={randomWeighted}
      />
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
const NodeRow = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

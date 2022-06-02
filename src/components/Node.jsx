import React, { useState } from "react";
import styled from "styled-components";
import changeStyle from "../scripts/changeStyleNode";

function Node({ data, algorithmParams }) {
  // console.log(algorithmParams);
  const [style, setStyle] = useState("unvisited");

  return (
    <Cell
      className={style}
      style={{
        backgroundColor: data.isStart
          ? "red"
          : data.isEnd
          ? "green"
          : data.isBlock
          ? "rgb(58, 58, 58)"
          : data.color,
      }}
      onClick={() => {
        changeStyle(data, algorithmParams, setStyle);
      }}
    >
      {/* {data.rowId + " " + data.colId}
      {data.id}
      {data.value}
      {data.weight} */}

      {data.isBlock
        ? ""
        : algorithmParams.algorithm === 1
        ? data.valueF //+ " " + data.valueH + " " + data.valueG
        : data.display}
    </Cell>
  );
}

export default Node;

const Cell = styled.div`
  width: 35px;
  height: 35px;
  margin-top: auto;
  margin-right: auto;
  /* margin: 2px; */
  border: 2px black solid;
  /* border-radius: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  &:hover {
  }
`;

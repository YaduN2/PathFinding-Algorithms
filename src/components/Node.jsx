import React, { useState } from "react";
import styled from "styled-components";

function Node({ data, algorithmParams }) {
  // console.log(algorithmParams);
  const [style, setStyle] = useState("unvisited");
  const changeStyle = () => {
    // console.log("node Clicked!");

    if (algorithmParams.startSelected === false) {
      algorithmParams.startSelected = true;
      algorithmParams.startRow = data.rowId;
      algorithmParams.startCol = data.colId;
      data.isStart = true;
      setStyle("start");
      return;
    }

    if (algorithmParams.endSelected === false) {
      algorithmParams.endSelected = true;
      algorithmParams.endRow = data.rowId;
      algorithmParams.endCol = data.colId;
      data.isEnd = true;
      setStyle("end");
      return;
    }

    if (
      algorithmParams.startSelected === true &&
      algorithmParams.endSelected === true &&
      data.weight !== 999 &&
      algorithmParams.algorithmStatus === 0
    ) {
      data.weight = 999;
      setStyle("block");
      return;
    }

    if (
      algorithmParams.startSelected === true &&
      algorithmParams.endSelected === true &&
      data.weight === 999
    ) {
      data.weight = 1;
      setStyle("unvisited");
      return;
    }

    if (
      algorithmParams.startSelected === true &&
      algorithmParams.startRow === data.rowId &&
      algorithmParams.startCol === data.colId
    ) {
      algorithmParams.startSelected = false;
      algorithmParams.startRow = -1;
      algorithmParams.startCol = -1;
      data.isStart = false;
      setStyle("unvisited");
    }

    if (
      algorithmParams.endSelected === true &&
      algorithmParams.endRow === data.rowId &&
      algorithmParams.endCol === data.colId
    ) {
      algorithmParams.endSelected = false;
      algorithmParams.endRow = -1;
      algorithmParams.endCol = -1;
      data.isEnd = false;
      setStyle("unvisited");
    }
  };
  // const changeWeight = ()=>{
  //   data.weight =
  // }
  // console.log(data);
  return (
    <Cell
      className={style}
      style={{
        backgroundColor: data.isStart
          ? "red"
          : data.isEnd
          ? "green"
          : data.weight === 999
          ? "rgb(58, 58, 58)"
          : data.color,
      }}
      onClick={changeStyle}
    >
      {/* {data.rowId + " " + data.colId} */}
      {data.id}
      {/* {data.value} */}
      {/* {data.weight} */}
      {/* {data.display} */}
    </Cell>
  );
}

export default Node;

const Cell = styled.div`
  width: 35px;
  height: 35px;
  margin-top: auto;
  margin-right: auto;
  border: 2px black solid;
  /* border-radius: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

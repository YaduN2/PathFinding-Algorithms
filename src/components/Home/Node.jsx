import { React, useState } from "react";
import styled from "styled-components";
import "./Node.css";

function Node(props) {
  const [style, setStyle] = useState("normal");

  const changeStyle = () => {
    console.log("CLICKED");
    let currInPoints = props.initialPoints;
    // console.log(currInPoints);

    /* IF START IS NOT SET -> SET START */
    if (currInPoints.start === false) {
      currInPoints.start = true;
      currInPoints.startRow = props.data.row;
      currInPoints.startCol = props.data.col;
      setStyle("start");
      return;
    }
    /* IF END IS NOT SET -> SET SELECTED NODE as END */
    if (currInPoints.end === false) {
      currInPoints.end = true;
      currInPoints.endRow = props.data.row;
      currInPoints.endCol = props.data.col;
      setStyle("end");
      return;
    }
    /* If START is set and SELECTED NODE is START -> reset to white */
    if (
      currInPoints.start === true &&
      currInPoints.startRow === props.data.row &&
      currInPoints.startCol === props.data.col
    ) {
      currInPoints.start = false;
      currInPoints.startRow = -1;
      currInPoints.startCol = -1;
      setStyle("normal");
    }

    /* If END is set and SELECTED NODE is END -> reset to white */
    if (
      currInPoints.end === true &&
      currInPoints.endRow === props.data.row &&
      currInPoints.endCol === props.data.col
    ) {
      currInPoints.end = false;
      currInPoints.endRow = -1;
      currInPoints.endCol = -1;
      setStyle("normal");
    }

    /*     if (currInPoints.start === true && currInPoints.end === true) {
      setStyle("normal");
      return;
    } */
  };

  return (
    <NodeGrid onClick={changeStyle} className={style}>
      {props.data.row + " " + props.data.col}
    </NodeGrid>
  );
}

export default Node;

const NodeGrid = styled.div`
  width: 3rem;
  height: 3rem;
  margin-top: auto;
  margin-right: auto;
  border: 3px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

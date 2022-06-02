import React from "react";
import styled from "styled-components";
import "./Others.css";
function Control({ start, reset, randomBlock = null, randomWeight = null }) {
  return (
    <Controls>
      <StartBtn
        onClick={start}
        className="button"
        style={{ backgroundColor: "#3ca53c" }}
      >
        Start
      </StartBtn>
      <ResetBtn
        onClick={reset}
        className="button"
        style={{ backgroundColor: "#892a2a" }}
      >
        Reset
      </ResetBtn>
      <RandomBlockBtn
        onClick={randomBlock}
        className="button"
        style={{
          display: randomBlock === null ? "none" : "",
          backgroundColor: "#333b88",
        }}
      >
        Random Blocks
      </RandomBlockBtn>
      <RandomWeightBtn
        onClick={randomWeight}
        className="button"
        style={{ display: randomWeight === null ? "none" : "" }}
        // style={{ backgroundColor: "#3a7366" }}
      >
        Random Weight
      </RandomWeightBtn>
    </Controls>
  );
}

export default Control;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResetBtn = styled.button``;
const RandomBlockBtn = styled.button``;
const RandomWeightBtn = styled.button``;
const StartBtn = styled.button``;

/* .button {
  font-size: 1.2rem;
  padding: 8px;
  margin-top: 12px;
  width: 6rem;
  border: 3px solid black;
  border-radius: 10px;
} */

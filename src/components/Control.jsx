import React from "react";
import styled from "styled-components";
import "./Others.css";
function Control({ start, reset, randomBlock = null, randomWeight = null }) {
  return (
    <Controls>
      <StartBtn
        onClick={start}
        className="button"
        style={{ backgroundColor: "#3a733a" }}
      >
        Start
      </StartBtn>
      <ResetBtn
        onClick={reset}
        className="button"
        style={{ backgroundColor: "#733a3a" }}
      >
        Reset
      </ResetBtn>
      <RandomBlockBtn
        onClick={randomBlock}
        className="button"
        style={{ backgroundColor: "#3a4073" }}
      >
        Random Blocks
      </RandomBlockBtn>
      <RandomWeightBtn
        onClick={randomWeight}
        className="button"
        style={{ backgroundColor: "#3a7366" }}
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

import React from "react";
import styled from "styled-components";

function GridMenu() {
  return (
    <Menu>
      <ClearBtn>HELLo</ClearBtn>
    </Menu>
  );
}

export default GridMenu;

const Menu = styled.div``;
const ClearBtn = styled.button`
  background-color: yellow;
  position: absolute;
`;

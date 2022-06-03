import React from "react";
import styled from "styled-components";
function Heading({ heading }) {
  return <HeadingCard>{heading}</HeadingCard>;
}

export default Heading;
const HeadingCard = styled.div`
  background-color: #b9b9b9;
  font-size: 2.5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: 3px solid transparent;
  user-select: none;
  &:hover {
    border: 3px solid #15cdfc;
  }
`;

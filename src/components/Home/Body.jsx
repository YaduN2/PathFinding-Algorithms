import React from "react";
import styled from "styled-components";
function Body({ body }) {
  return <BodyCard>{body}</BodyCard>;
}

export default Body;
const BodyCard = styled.div`
  background-color: #b9b9b9;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: 3px solid transparent;
  transition: transform 0.5s; /* Animation */
  &:hover {
    border: 3px solid #2eff2e;
    transform: scale(1.2);
  }
`;

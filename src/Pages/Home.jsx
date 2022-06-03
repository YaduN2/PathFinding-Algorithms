import React from "react";
import styled from "styled-components";
import Heading from "../components/Home/Heading";
import Body from "../components/Home/Body";

function Home({ content }) {
  return (
    <HomeContent>
      <Heading heading={content.PathFindingVisualizer.heading} />
      <Body body={content.PathFindingVisualizer.description} />
      <Heading heading={content.PathFindingAlgorithms.heading} />
      <Body body={content.PathFindingAlgorithms.description} />

      <Heading heading={content.Dijkstra.heading} />
      <Body body={content.Dijkstra.description} />
      <Body body={content.Dijkstra.explanation} />

      <Heading heading={content.AStar.heading} />
      <Body body={content.AStar.description} />
      <Body body={content.AStar.explanation} />
    </HomeContent>
  );
}

export default Home;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

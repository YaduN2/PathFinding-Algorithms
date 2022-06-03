import makeNodes from "../../scripts/makeNodes";
const clonedGrid = (grid) => {
  return grid.map(function (arr) {
    return arr.slice();
  });
};

const generateMaze = (maze, algorithmParams, setNodes) => {
  let newGrid = clonedGrid(makeNodes(algorithmParams, 0, true));
  for (let i = 0; i < maze.length; i++) {
    const node = maze[i];
    let newNode = {
      ...node,
      isBlock: false,
    };
    newGrid[node.rowId][node.colId] = newNode;
  }
  setNodes(newGrid);
};

export default generateMaze;

const getVisitedNeighbours = (neighbours) => {
  let count = 0;
  for (const neighbour of neighbours) {
    if (neighbour.mazeVisited) count++;
  }
  return count;
};

const getNeighbours = (node, grid, algorithmParams) => {
  var neighbours = [];
  let i = node.rowId,
    j = node.colId,
    row = algorithmParams.nRow,
    col = algorithmParams.nCol;

  if (j >= 0 && j < col - 1) {
    /* DOWN */
    neighbours.push(grid[i][j + 1]);
  }

  if (j > 0 && j <= col - 1) {
    /* UP */
    neighbours.push(grid[i][j - 1]);
  }

  if (i >= 0 && i < row - 1) {
    /* RIGHT */
    neighbours.push(grid[i + 1][j]);
  }

  if (i > 0 && i <= row - 1) {
    /* LEFT */
    neighbours.push(grid[i - 1][j]);
  }
  return neighbours;
};

const removeElement = (array, element) => {
  array.splice(array.indexOf(element), 1);
  return array;
};

const mazeGenerator = (grid, algorithmParams) => {
  let maze = [];
  // let startingNode = grid[0][0];
  let startingNode =
    grid[Math.floor(Math.random() * algorithmParams.nRow)][
      Math.floor(Math.random() * algorithmParams.nCol)
    ];

  //   console.log(startingNode);
  startingNode.mazeVisited = true;
  maze.push(startingNode);
  console.log(maze);
  var startingNeighbours = getNeighbours(startingNode, grid, algorithmParams);
  let walls = [...startingNeighbours];
  while (walls.length !== 0) {
    console.log(walls.length);
    let randomIndex = Math.floor(Math.random() * walls.length);
    let randomWall = walls[randomIndex];

    if (randomWall.mazeVisited) {
      removeElement(walls, randomWall);
      continue;
    }

    let randomWallNeighbours = getNeighbours(randomWall, grid, algorithmParams);
    let visitedNeighboursCount = getVisitedNeighbours(randomWallNeighbours);
    if (visitedNeighboursCount === 1) {
      randomWall.mazeVisited = true;
      randomWall.isBlock = false;
      maze.push(randomWall);
      walls = [...walls, ...randomWallNeighbours];
    }
    removeElement(walls, randomWall);
  }
  return [maze, walls];
};
export default mazeGenerator;

import PriorityQueue from "./PriorityQueue";

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

const getPath = (endingNode) => {
  var path = [];
  let temp = endingNode;
  while (temp !== null) {
    path.push(temp);
    temp = temp.parent;
  }
  return path;
};

const getH = (node, endingNode) => {
  return (
    Math.abs(node.rowId - endingNode.rowId) +
    Math.abs(node.colId - endingNode.colId)
  );
};

const AStar = (grid, algorithmParams) => {
  let startingNode = grid[algorithmParams.startRow][algorithmParams.startCol];
  let endingNode = grid[algorithmParams.endRow][algorithmParams.endCol];
  let totalNodes = algorithmParams.nRow * algorithmParams.nCol;
  var openList = new PriorityQueue();
  let closedList = [];
  var arrayGValues = new Array(totalNodes);
  let returnObject = {
    path: [],
    visitedNodes: [],
  };
  for (let i = 0; i < totalNodes; i++) arrayGValues[i] = Infinity;
  arrayGValues[startingNode.id] = 0;
  startingNode.valueF = getH(startingNode, endingNode);
  startingNode.visited = 1;
  openList.enqueue(startingNode, startingNode.valueF);

  while (!openList.isEmpty()) {
    let currentNode = openList.front().element;
    openList.dequeue();
    currentNode.visited = 1;
    returnObject.visitedNodes.push(currentNode);
    if (currentNode === endingNode) {
      console.log("END");
      returnObject.path = getPath(endingNode);
      return returnObject;
    }
    var neighbours = getNeighbours(currentNode, grid, algorithmParams);

    for (const neighbour of neighbours) {
      if (neighbour.weight === 999) continue;
      let tempGScore = arrayGValues[currentNode.id] + currentNode.weight;
      if (tempGScore < arrayGValues[neighbour.id]) {
        neighbour.parent = currentNode;
        arrayGValues[neighbour.id] = tempGScore;
        neighbour.valueF = tempGScore + getH(neighbour, endingNode);
        if (neighbour.visited === 0) {
          openList.enqueue(neighbour, neighbour.valueF);
        }
      }
    }
  }
  console.log("NO PATH");
  return returnObject;
};

export default AStar;

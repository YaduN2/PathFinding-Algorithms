import PriorityQueue from "./PriorityQueue";

const DijkstraAlgorithm = (nodes, algorithmParams) => {
  let row = algorithmParams.nRow;
  let col = algorithmParams.nCol;
  let totalNodes = algorithmParams.nRow * algorithmParams.nCol;
  //   console.log(nodes);
  const getNeighbours = (i, j) => {
    var neighbours = [];
    if (j >= 0 && j < col - 1) {
      /* DOWN */
      neighbours.push([i, j + 1]);
    }

    if (j > 0 && j <= col - 1) {
      /* UP */
      neighbours.push([i, j - 1]);
    }

    if (i >= 0 && i < row - 1) {
      /* RIGHT */
      neighbours.push([i + 1, j]);
    }

    if (i > 0 && i <= row - 1) {
      /* LEFT */
      neighbours.push([i - 1, j]);
    }

    return neighbours;
  };

  console.log("Start Dijkstra");

  if (!algorithmParams.startSelected || !algorithmParams.endSelected) {
    console.log("algorithmParams not satisfied");
    return;
  }
  var distanceArray = new Array(totalNodes);
  for (let i = 0; i < totalNodes; i++) {
    distanceArray[i] = Infinity;
  }
  var startingNode = nodes[algorithmParams.startRow][algorithmParams.startCol];
  distanceArray[startingNode.id] = 0;
  /* change color of starting Node ^^^^ */

  var pQueue = new PriorityQueue();
  var visitedNodes = [];
  pQueue.enqueue(startingNode, startingNode.weight);
  while (!pQueue.isEmpty()) {
    let currNode = pQueue.front().element;
    pQueue.dequeue();
    let i = currNode.rowId;
    let j = currNode.colId;
    let neighbours = getNeighbours(i, j);
    currNode.nodeStatus = 1;
    for (const neighbour of neighbours) {
      // selectedNode = nodes[nI][nJ]
      let [nI, nJ] = neighbour;
      /* If selectedNode is not visited and if distanceToCurrNode + weightOfSelectedNode < distanceToSelectedNode => current path is of shorter distance*/
      if (nodes[nI][nJ].weight === 999) {
        continue;
      }
      if (
        nodes[nI][nJ].visited === 0 &&
        distanceArray[currNode.id] + nodes[nI][nJ].weight <
          distanceArray[nodes[nI][nJ].id]
      ) {
        distanceArray[nodes[nI][nJ].id] =
          distanceArray[currNode.id] + nodes[nI][nJ].weight;

        pQueue.enqueue(nodes[nI][nJ], nodes[nI][nJ].weight);
        /* Change color of selectedNode */
        visitedNodes.push(nodes[nI][nJ]);
        nodes[nI][nJ].parent = currNode;
        nodes[nI][nJ].visited = 1;
      }
    }
  }
  // console.log("visitedNodes");
  let retObject = {
    path: [],
    visitedNodes: visitedNodes,
  };
  //   console.log(distanceArray);
  let temp = nodes[algorithmParams.endRow][algorithmParams.endCol];
  if (temp.parent === null) {
    console.log("path not found!");
    return retObject;
  }

  var path = [];

  while (temp !== null) {
    path.push(temp);
    // console.log(temp.id);
    /* Change color for backtracking */
    temp = temp.parent;
  }
  algorithmParams.algorithmStatus = 1;
  retObject.path = path;
  return retObject;
};

export default DijkstraAlgorithm;

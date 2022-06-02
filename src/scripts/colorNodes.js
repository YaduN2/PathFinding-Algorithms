const clonedGrid = (grid) => {
  return grid.map(function (arr) {
    return arr.slice();
  });
};
//visitedNodes-> array of nodes in visisted order , newGrid-> a cloned version of grid(2D array of nodes)

const locateNode = (grid, visitedNodes, setNodes) => {
  if (visitedNodes.length !== 0) {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        let newGrid = clonedGrid(grid);
        const node = visitedNodes[i];
        // console.log(node.id);
        const newNode = {
          ...node,
          color: "yellow",
        };
        newGrid[node.rowId][node.colId] = newNode;
        setNodes(newGrid);
        // console.log(newGrid);
      }, 50 * i);
    }
  }
};

const colorVisited = (visitedNodes, newGrid, setNodes) => {
  if (visitedNodes.length !== 0) {
    for (let i = 0; i < visitedNodes.length; i++) {
      const node = visitedNodes[i];
      // console.log(node.id);
      const newNode = {
        ...node,
        color: "yellow",
      };
      newGrid[node.rowId][node.colId] = newNode;
      setNodes(newGrid);
      // console.log(newGrid);
    }
  }
};

const colorPath = (path, newGrid, setNodes) => {
  for (let i = 0; i < path.length; i++) {
    const node = path[i];
    // console.log(node.id);
    let newNode = {
      ...node,
      color: "deeppink",
      visited: 2,
    };
    newGrid[node.rowId][node.colId] = newNode;
    setNodes(newGrid);
  }
};

const changeColor = (grid, path, visitedNodes, setNodes) => {
  let newGrid = clonedGrid(grid);
  locateNode(grid, visitedNodes, setNodes);
  setTimeout(() => {
    colorVisited(visitedNodes, newGrid, setNodes);
    colorPath(path, newGrid, setNodes);
  }, 50 * visitedNodes.length);
};

export default changeColor;

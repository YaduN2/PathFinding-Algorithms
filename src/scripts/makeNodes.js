const getRandomBlocks = () => {
  if (Math.random() > 0.8) {
    return true;
  } else {
    return false;
  }
};

const getRandomWeight = () => {
  return Math.floor(Math.random() * 100);
};

const makeNode = (rowId, colId, nodeID, weight = 1, block = false) => {
  return {
    rowId: rowId,
    colId: colId,
    id: nodeID,
    value: 1,
    isStart: false,
    isEnd: false,
    isBlock: block,
    weight: weight,
    parent: null,
    visited: 0,
    color: "white",
    display: weight,
    mazeVisited: false,
  };
};

const makeNodes = (algorithmParams, flag = 0, maze = false) => {
  let initalNodes = [];
  let totalNode = 0;
  let ROW = algorithmParams.nRow,
    COL = algorithmParams.nCol;
  for (let i = 0; i < ROW; i++) {
    let nodeRow = [];
    for (let j = 0; j < COL; j++) {
      totalNode++;
      let weight, block;
      if (flag === 1) block = getRandomBlocks();
      if (flag === 2) weight = getRandomWeight();
      if (maze) block = true;
      let node = makeNode(i, j, totalNode - 1, weight, block);
      nodeRow.push(node);
    }
    initalNodes.push(nodeRow);
  }

  return initalNodes;
};

export default makeNodes;

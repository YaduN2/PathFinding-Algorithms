const changeStyle = (data, algorithmParams, setStyle) => {
  //##
  //##
  //if selectedNode is Start or End
  if (data.isBlock) {
    data.isBlock = false;
    setStyle("unvisited");
    return;
  }
  if (data.isStart || data.isEnd) {
    //if selectedNode is Start
    if (data.isStart) {
      algorithmParams.startSelected = false;
      algorithmParams.startRow = -1;
      algorithmParams.startCol = -1;
      data.isStart = false;
      setStyle("unvisited");
      return;
    }
    //if selectedNode is End
    else if (data.isEnd) {
      algorithmParams.endSelected = false;
      algorithmParams.endRow = -1;
      algorithmParams.endCol = -1;
      data.isEnd = false;
      setStyle("unvisited");
      return;
    }
  }

  if (!algorithmParams.startSelected || !algorithmParams.endSelected) {
    //start not selected
    if (
      !data.isEnd &&
      !data.isBlock &&
      algorithmParams.startSelected === false
    ) {
      algorithmParams.startSelected = true;
      algorithmParams.startRow = data.rowId;
      algorithmParams.startCol = data.colId;
      data.isStart = true;
      setStyle("start");
      return;
    }
    //end not selected
    else if (
      !data.isStart &&
      !data.isBlock &&
      algorithmParams.endSelected === false
    ) {
      algorithmParams.endSelected = true;
      algorithmParams.endRow = data.rowId;
      algorithmParams.endCol = data.colId;
      data.isEnd = true;
      setStyle("end");
      return;
    }
  } else {
    //if SelectedNode is block

    data.isBlock = true;
    setStyle("block");
    return;
  }
};

export default changeStyle;

const dfsRecursive = (treeNode, input, matchedData) => {
  for (let index = 0; index < treeNode.length; index++) {
    const isMatching = treeNode[index].title.toLowerCase().includes(input);
  
    if (isMatching) {
      matchedData[`${treeNode[index].title}-${treeNode[index].url}`] = true
    }

    if (treeNode[index].children) {
      dfsRecursive(treeNode[index].children, input, matchedData);
    }
  }
}

export const search = (input, treeData) => {
  const matchedData = {};
  dfsRecursive(treeData, input, matchedData);
  return matchedData;
}

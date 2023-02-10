export const getColumnList = (input) => {
  return Object.keys(input[0]);
};

export const getDictList = (input) => {
  var columnList = getColumnList(input);
  var dict = {};
  for (var itm in columnList) {
    dict[columnList[itm]] = [];
  }
  for (var i in input) {
    let tmp = Object.values(input[i]);
    for (var j in tmp) {
      dict[columnList[j]].push(tmp[j]);
    }
  }
  return dict;
};

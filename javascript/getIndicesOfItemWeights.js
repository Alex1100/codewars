const getIndicesOfItemWeights = (arr, limit) => {
  let checked = {};
  let temp = [];

  arr.forEach((num, i) => {
    let a = limit - num;
    if(arr.includes(a)){
      checked[a] = a;
    }

    if((checked[a] + num) === limit && arr.indexOf(checked[a]) !== arr.indexOf(num)){
      temp.push([num, checked[a]]);
    }
  });

  return temp.length > 0 ? temp[0] : null;
};


getIndicesOfItemWeights([1, 10, 20, 220, 210], 230);


// result = [ 10, 220 ];

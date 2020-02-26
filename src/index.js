
exports.min = function min (array) {
  if(array){
    if (array.length > 1){
      return array.sort((a, b) => a-b).splice(0,1);
    };
  };
  return 0;
}

exports.max = function max (array) {
  if (array){
    if (array.length > 1){
      return array.sort((a, b) => b-a).splice(0,1);
    };
  };
  return 0;
}

exports.avg = function avg (array) {
  if (array){
    if (array.length > 1){
      return array.reduce((acc, arg) => acc+=arg)/array.length;
    };
  };
  return 0;
}

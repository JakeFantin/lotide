//Dependencies
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(source){
  let flat = [];
  for(let i = 0; i < source.length; i++){
    if(Array.isArray(source[i])){
      flat = flat.concat(flatten(source[i]));
    }
    else{
      flat.push(source[i]);
    }
  }
  return flat;
};

module.exports = flatten;
// Test Code
// assertArraysEqual(flatten([1,2,[1,1],4]), [1,2,1,1,4]);
// assertArraysEqual(flatten([1,3,[1,2],4,[6]]),[1,3,1,2,4,6]);
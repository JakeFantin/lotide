// Dependencies
const assertArraysEqual = require('./assertArraysEqual');

// Functional Code
const map = function(array, callback){
  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
//Test Code
// assertArraysEqual(map([5,6,7], num => num*3), [15,18,21]);
// assertArraysEqual(map(['pow','cow','mow'], word => word+='ard'), ['poward','coward','moward']);
// assertArraysEqual(map(['aquiesce','concur','agree'], word => word[0]+word[4]), ['ae','cu','ae']);
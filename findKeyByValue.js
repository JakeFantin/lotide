//Dependencies
const assertEqual = require('./assertEqual').default;

const findKeyByValue = function(source, value){
 for(let key in source){
   if(source[key] === value){
     return key;
   }
 }
 return undefined;
}
module.exports = findKeyByValue;

// Test Code
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
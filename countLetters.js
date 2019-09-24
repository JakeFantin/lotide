//Dependencies
const assertEqual = require('./assertEqual').default;

const countLetters = function(sourceString){
  letterCounts = {};
  for(let letter of sourceString){
    if(letter !== " "){
      if(letterCounts[letter]){
        letterCounts[letter] += 1;
      }else{
        letterCounts[letter] =1;
      }
    }
  }
  return letterCounts;
};
module.exports = countLetters;
//Test Code
// const results = countLetters("lighthouse in the house");

// assertEqual(results.i, 2);
// assertEqual(results.e, 3);
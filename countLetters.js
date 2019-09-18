const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💎️ Assertion Passed: " ${actual} === ${expected}`);
  } else {
    console.log(`💥️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const results = countLetters("lighthouse in the house");

assertEqual(results.i, 2);
assertEqual(results.e, 3);
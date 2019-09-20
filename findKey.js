// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💎️ Assertion Passed: " ${actual} === ${expected}`);
  } else {
    console.log(`💥️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for(let key in obj){
    if(callback(obj[key])){
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

assertEqual(findKey({
  a: 'hustlin',
  b: 'hustlin',
  c: 'hustlin',
  d: 'money',
  e: 'money'
}, x => x === 'money'), 'd');

assertEqual(findKey({
  cowards: 3974,
  come: 32097,
  here: 4892,
  no: 3229,
  more: 8573,
  foolish: 232,
  one: 1254,
}, x => (x%4===0)), 'here');
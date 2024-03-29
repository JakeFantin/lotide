//Dependencies
const assertEqual = require('./assertEqual').default;

const countOnly = function(allItems, itemsToCount){
  const results = {}
  for(const item of allItems){
    if(itemsToCount[item] === true){
      if(results[item]) results[item] += 1;
      else results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

//Test Code
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
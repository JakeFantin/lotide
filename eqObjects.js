// Functional Code
const eqObjects = (obj1, obj2) => {
  const obj1entries = Object.entries(obj1);
  const obj2entries = Object.entries(obj2);

  if (obj1entries.length !== obj2entries.length) {
    return false;

  } else if (typeof obj1entries[0][1] === 'object') {
    return eqObjects(obj1entries[0][1], obj2[obj1entries[0][0]]);

  } else if (!obj2[obj1entries[0][0]] || obj1entries[0][1] !== obj2[obj1entries[0][0]]) {
    return false;

  } else if (!obj1entries[0][1].length && !obj2entries[0][1].length && obj1entries.length === 1 && obj2entries.length === 1) {
    if (obj1entries[0][1] === obj2entries[0][1]) {
      return true;

    } else {
      return false;
    }

  } else if (Array.isArray(obj1)) {
    obj1.shift();
    obj2.shift();
  } else {
    delete obj1[obj1entries[0][0]];
    delete obj2[obj1entries[0][0]];
  }
  return eqObjects(obj1, obj2);
};

//Testing code

const df = {
  i: 3,
  j: [4, 5]
};
const fd = {
  j: [4, 5],
  i: 3
};

const cs = {
  i: 3,
  j: [4, 5, fd]
};
const cf = {
  i: 3,
  j: [4, 5, df]
};

const cdd = { c: "1", d: ["2", ['245', 3]] };
const dcc = { d: ["2", ['245', 3]], c: "1" };
console.log(eqObjects(cdd, dcc), true); // => true

const cdb = { c: 1, d: [cs, 3] };
const dcb = { d: [cf, 3], c: 1 };
console.log(eqObjects(cdb, dcb), true); // => true
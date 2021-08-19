let obj = { a: { c: { val: 1, b: { val: 2 } } } };

function recur(obj) {
  for (let x in obj) {
    key = Object.keys(obj[x]).length;
    if (key > 0 && typeof obj[x] === 'object') {
      recur(obj[x]);
    } else {
      console.log(obj[x]);
    }
  }
}

recur(obj);

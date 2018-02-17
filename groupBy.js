// Implement a function "groupBy", which, when given an array of objects and a function, returns an object where the input objects are keyed by the result of calling the fn on each of them.


function groupBy(arr, cb) {
  const res = {};
  for(const el of arr){
    const key = cb(el);
    (res[key] || (res[key] = [])).push(el);
  }
  return res;
}
// Implement a function "intersection", which, when given two arrays of values, returns an array of the values that exist in both of the input arrays.


function intersection(listA, listB) {

  var d = {};
  var results = [];
  for (var i = 0; i < listB.length; i++) {
    d[listB[i]] = true;
  }
  for (var j = 0; j < listA.length; j++) {
    if (d[listA[j]]) {
      results.push(listA[j]);
    }
  }
  return results;
}
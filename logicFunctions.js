// Implement the four fundamental logic functions: AND, OR, XOR and NOR.

// Each function will receive two values, A and B, which can be either 0 or 1.
// The result will always be either 0 or 1, but depends on the function.


/*
   AND:

   A  B  Result

   0  0    0
   1  0    0
   0  1    0
   1  1    1
*/

function and(a, b) {
  if (a === 1 && b === 1) {
    return 1;
  } else {
    return 0;
  }
}

/*
   OR:

   A  B  Result

   0  0    0
   1  0    1
   0  1    1
   1  1    1
*/

function or(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  } else {
    return 1;
  }
}

/*
   XOR:

   A  B  Result

   0  0    0
   1  0    1
   0  1    1
   1  1    0
*/

function xor(a, b) {
  if ((a === 0 && b === 0) || (a === 1 && b === 1)) {
    return 0;
  } else {
    return 1;
  }
}

/*
   NOR:

   A  B  Result

   0  0    1
   1  0    0
   0  1    0
   1  1    0
*/

function nor(a, b) {
  if (a === 0 && b === 0) {
    return 1;
  } else {
    return 0;
  }
}

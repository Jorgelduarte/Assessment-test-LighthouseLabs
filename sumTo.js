//Implement a function "sumTo", which, when given an integer N, returns the sum of integers from 0 to N.


function sumTo(n) {
  var i;
  var sum = 0;
  for(i = 1;i <= n; i++){
    sum = sum + i;
  }
  return (sum);
}
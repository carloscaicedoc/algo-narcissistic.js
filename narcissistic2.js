/* A Narcissistic Number is a number that equals the sum of each of its digits raised to the number of digits. 
For example, 153 is a Narcissistic Number because 1^3 + 5^3 + 3^3 = 153.
You will be given an integer num and are to return true if the integer is a Narcissistic Number and false if it is not. */


// Alternative solution 

function narcissistic(value) {
  var str = value.toString();
  var sum = 0;
  for (var it = 0; it < str.length; it++) {
    sum += Math.pow(parseInt(str[it]), str.length);
  }
  return sum === value
}

// Test Cases:
console.log(narcissistic(153))
console.log(narcissistic(456))
console.log(narcissistic(77))
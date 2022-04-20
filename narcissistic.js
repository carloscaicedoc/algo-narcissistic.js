/* A Narcissistic Number is a number that equals the sum of each of its digits raised to the number of digits. 
For example, 153 is a Narcissistic Number because 1^3 + 5^3 + 3^3 = 153.
You will be given an integer num and are to return true if the integer is a Narcissistic Number and false if it is not. */

function narcissistic(value) {

    if (value <= 0) {
        return false;
    }
  
    let num = value.toString();
    let exp = num.length;
    
    let arrayValue = num.split('');
    let poweredValue = 0;
    let sum = 0;
    
    for (let i = 0; i<exp; i++){
      poweredValue = Number(arrayValue[i])**exp;
      sum += poweredValue
    }
    
    return sum === value
  }

  // Test Cases:
  console.log(narcissistic(153))
  console.log(narcissistic(456))
  console.log(narcissistic(77))
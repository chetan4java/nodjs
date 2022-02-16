// var calculator = require('./calc');

// var x = 50, y = 10;

// console.log("Addition of 50 and 10 is "
// 				+ calculator.add(x, y));

// console.log("Subtraction of 50 and 10 is "
// 				+ calculator.sub(x, y));

// console.log("Multiplication of 50 and 10 is "
// 				+ calculator.mult(x, y));

// console.log("Division of 50 and 10 is "
// 				+ calculator.div(x, y));
/////////////////////////////////////////////////////////////////

// var calculator = require("./calc");

// var x = 50, y = 10;
// let calc = calculator.op;

// console.log(calculator);
// console.log(calc);

// console.log("Addition of 50 and 10 is " + calc.plus(x, y));

// console.log("Subtraction of 50 and 10 is " + calc.minus(x, y));

// console.log("Multiplication of 50 and 10 is " + calc.product.mult(x, y));

// console.log("Division of 50 and 10 is " + calc.divide(x, y));
///////////////////////////////////////////////////////////////////
var calculator = require("./calc");

var x = 50, y = 10;
 
console.log(calculator);
 
console.log("Addition of 50 and 10 is " + calculator.plus(x, y));

console.log("Subtraction of 50 and 10 is " + calculator.minus(x, y));

console.log("Multiplication of 50 and 10 is " + calculator.product(x, y));

console.log("Division of 50 and 10 is " + calculator.divide(x, y));
var Calculator = require('./Calculator').Calculator;

var calculator = new Calculator();
console.log(calculator.doCalc("(1+2)*3"));      // int
console.log(calculator.doCalc("(1+2.0)*3"));    // float
console.log(calculator.doCalc("(1+2)*3^2"));    // int
console.log(calculator.doCalc("(1+2)*3^-2"));   // float
console.log(calculator.doCalc("(1+2)*3^2.0"));  // float

console.log(calculator.doCalc("(1+0/0)*3"));      // NaN


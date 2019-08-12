var Calculator = require('./Calculator').Calculator;

var calculator = new Calculator();
console.log(calculator.doCalc("(1+2)*3"));      // int
console.log(calculator.doCalc("(1+2.0)*3"));    // float
console.log(calculator.doCalc("(1+2)*3^2"));    // int
console.log(calculator.doCalc("(1+2)*3^-2"));   // float
console.log(calculator.doCalc("(1+2)*3^2.0"));  // float

console.log(calculator.doCalc("(1+0/0)*3"));      // NaN

calculator.registerFunction("Sin", function(arg) {
    //console.log("callback:Sin()");
    return {"result":true, "value":Math.sin(arg.value), "type":"float"};
});
calculator.registerFunction("Cos", function(arg) {
    //console.log("callback:Cos()");
    return {"result":true, "value":Math.cos(arg.value), "type":"float"};
});
calculator.registerFunction("Tan", function(arg) {
    //console.log("callback:Tan()");
    return {"result":true, "value":Math.tan(arg.value), "type":"float"};
});
console.log(calculator.doCalc("Sin(0.0)"));      // Function
console.log(calculator.doCalc("Cos(0.0)"));      // Function
console.log(calculator.doCalc("Tan(0.0)"));      // Function
console.log(calculator.doCalc("Sin(3.141592/2) + Cos(3.141592/2)")); // Function
console.log(calculator.doCalc("(Sin(3.141592/2) + Cos(3.141592/2))*3")); // Function


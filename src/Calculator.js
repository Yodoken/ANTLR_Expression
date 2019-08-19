var antlr4 = require('antlr4/index');
var ExpressionLexer = require('./expr/ExpressionLexer').ExpressionLexer;
var ExpressionParser = require('./expr/ExpressionParser').ExpressionParser;
var CalcVisitor = require('./CalcVisitor').CalcVisitor;

//////////////////
// Calculator
function Calculator() {
  this.funcList = {};
  this.varList = {};
  return this;
}


Calculator.prototype.constructor = Calculator;

// Register function.
Calculator.prototype.registerFunction = function(funcName, func) {
  this.funcList[funcName] = func;
}

// Register const value.
Calculator.prototype.registerConst = function(varName, value) {
  this.varList[varName] = value;
}

// Do calculation.
Calculator.prototype.doCalc = function(input) {
  console.log(input);
  var chars = new antlr4.InputStream(input);
  var lexer = new ExpressionLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ExpressionParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.input();
  //console.log(this.varList);

  return tree.accept(new CalcVisitor(this.funcList, this.varList))[0];
};

exports.Calculator = Calculator;
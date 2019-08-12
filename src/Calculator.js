var antlr4 = require('antlr4/index');
var ExpressionLexer = require('./expr/ExpressionLexer').ExpressionLexer;
var ExpressionParser = require('./expr/ExpressionParser').ExpressionParser;
var ExpressionVisitor = require('./expr/ExpressionVisitor').ExpressionVisitor;


//////////////////
// CalcVisitor
function CalcVisitor() {
    ExpressionVisitor.call(this);
    return this;
}
Object.setPrototypeOf(CalcVisitor.prototype, ExpressionVisitor.prototype);

// Visit a parse tree produced by ExpressionParser#expr_additive.
CalcVisitor.prototype.visitExpr_additive = function(ctx) {
  //console.log("-- visitExpr_additive");
  var lhs = this.visit(ctx.lhs);
  var rhs = this.visit(ctx.rhs);
  //console.log(lhs);
  //console.log(rhs);
  if (!lhs.result || !rhs.result) {
    return {"result":false, "value":null, "error":{"lhs":lhs, "rhs":rhs}};
  }

  //console.log(ctx.op);
  switch (ctx.op.type) {
  case ExpressionLexer.PLUS:
    return {"result":true,"value":lhs.value + rhs.value};
    break;
  case ExpressionLexer.MINUS:
    return {"result":true,"value":lhs.value - rhs.value};
    break;
  default:
    return {"result":false, "value":null, "error":"Unknown operator"};
    break;
  }
};


// Visit a parse tree produced by ExpressionParser#expr_power.
CalcVisitor.prototype.visitExpr_power = function(ctx) {
  //console.log("-- visitExpr_power");
  var lhs = this.visit(ctx.lhs);
  var rhs = this.visit(ctx.rhs);
  if (!lhs.result || !rhs.result) {
    return {"result":false, "value":null, "error":{"lhs":lhs, "rhs":rhs}};
  }
  //console.log(ctx.op);
  switch (ctx.op.type) {
  case ExpressionLexer.HAT:
    return {"result":true, "value":lhs.value ** rhs.value};
    break;
  default:
    return {"result":false, "value":null, "error":"Unknown operator"};
    break;
  }
};


// Visit a parse tree produced by ExpressionParser#expr_multipricative.
CalcVisitor.prototype.visitExpr_multipricative = function(ctx) {
  //console.log("-- visitExpr_multipricative");
  var lhs = this.visit(ctx.lhs);
  var rhs = this.visit(ctx.rhs);
  if (!lhs.result || !rhs.result) {
    return {"result":false, "value":null, "error":{"lhs":lhs, "rhs":rhs}};
  }
  //console.log("--- op");
  //console.log(ctx.op);
  //console.log("lhs.value = "+lhs.value);
  //console.log("rhs.value = "+rhs.value);
  switch (ctx.op.type) {
  case ExpressionLexer.ASTERISK:
    //console.log("--- *");
    return {"result":true, "value":lhs.value * rhs.value};
    break;
  case ExpressionLexer.SLASH:
    //console.log("--- /");
    if (rhs.value === 0) {
      return {"result":false, "value":null,"error":"Division by zero."};
    } else {
      return {"result":true, "value":lhs.value / rhs.value};
    }
    break;
  default:
    return {"result":false, "value":null, "error":"Unknown operator"};
    break;
  }
};


// Visit a parse tree produced by ExpressionParser#expr_unary.
CalcVisitor.prototype.visitExpr_unary = function(ctx) {
  //console.log("-- visitExpr_unary");
  var expr = this.visit(ctx.ex);
  if (!expr.result) {
    return {"result":false, "value":null, "error":{"epxr":expr}};
  }
  //console.log(expr);
  switch (ctx.op.type) {
  case ExpressionLexer.PLUS:
    return expr;
  case ExpressionLexer.MINUS:
    return {"result":true, "value":-1 * expr.value};
  default:
    return {"result":false, "value":null, "error":"Unknown operator"};
  }
  return num;
};


// Visit a parse tree produced by ExpressionParser#expr_num.
CalcVisitor.prototype.visitExpr_num = function(ctx) {
  //console.log("-- visitExpr_num");
  return this.visit(ctx.no);
};


// Visit a parse tree produced by ExpressionParser#expr_none.
CalcVisitor.prototype.visitExpr_none = function(ctx) {
  //console.log("-- visitExpr_none");
  return this.visit(ctx.ex);
};


// Visit a parse tree produced by ExpressionParser#paren_expr.
CalcVisitor.prototype.visitParen_expr = function(ctx) {
  //console.log("-- visitParen_expr");
  return this.visit(ctx.ex);
};


// Visit a parse tree produced by ExpressionParser#num.
CalcVisitor.prototype.visitNum = function(ctx) {
  //console.log("-- visitNum");
  var token = ctx.getToken(ExpressionLexer.UINT, 0);
  if (token != null) {
    var val = parseInt(token.symbol.text);
    //console.log("val = "+val);
    return {"result": true, "value":val};
  }
  return {"result":false, "value":null, "error":"Unknown token"};
};


//////////////////
// Calculator
function Calculator() {
  return this;
}


Calculator.prototype.constructor = Calculator;


// Do calculation.
Calculator.prototype.doCalc = function(input) {
  var chars = new antlr4.InputStream(input);
  var lexer = new ExpressionLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ExpressionParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.input();
  
  return tree.accept(new CalcVisitor())[0];
};

exports.Calculator = Calculator;
// Generated from src/Expression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExpressionParser.

function ExpressionVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExpressionVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExpressionVisitor.prototype.constructor = ExpressionVisitor;

// Visit a parse tree produced by ExpressionParser#input.
ExpressionVisitor.prototype.visitInput = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_additive.
ExpressionVisitor.prototype.visitExpr_additive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_num.
ExpressionVisitor.prototype.visitExpr_num = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_power.
ExpressionVisitor.prototype.visitExpr_power = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_multipricative.
ExpressionVisitor.prototype.visitExpr_multipricative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_function.
ExpressionVisitor.prototype.visitExpr_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_unary.
ExpressionVisitor.prototype.visitExpr_unary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#expr_none.
ExpressionVisitor.prototype.visitExpr_none = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#paren_expr.
ExpressionVisitor.prototype.visitParen_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#num_uint.
ExpressionVisitor.prototype.visitNum_uint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExpressionParser#num_float.
ExpressionVisitor.prototype.visitNum_float = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExpressionVisitor = ExpressionVisitor;
var ExpressionLexer = require('./expr/ExpressionLexer').ExpressionLexer;
var ExpressionVisitor = require('./expr/ExpressionVisitor').ExpressionVisitor;


//////////////////
// CalcVisitor
function CalcVisitor(funcList, varList) {
    ExpressionVisitor.call(this);
    this.funcList = funcList;
    this.varList = varList;
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
  var type = (lhs.type === "float" || rhs.type === "float") ? "float" : "int";
  type = (lhs.type === "text" || rhs.type === "text") ? "text" : type;

  //console.log(ctx.op);
  switch (ctx.op.type) {
  case ExpressionLexer.PLUS:
    return {"result":true,"value":lhs.value + rhs.value, "type":type};
    break;
  case ExpressionLexer.MINUS:
      if (lhs.type === 'text' || rhs.type === 'text') {
        return {"result":false, "value":null, "error":"Invalid operation."};
      }
        return {"result":true,"value":lhs.value - rhs.value, "type":type};
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
  if (lhs.type === 'text' || rhs.type === 'text') {
    return {"result":false, "value":null, "error":"Invalid operation."};
  }
  //console.log(ctx.op);
  var type = (lhs.type === "float" || rhs.type === "float") ? "float" : "int";

  switch (ctx.op.type) {
  case ExpressionLexer.HAT:
    if (rhs.value < 0) {
        type = "float";
    }
    return {"result":true, "value":lhs.value ** rhs.value, "type":type};
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
  var type = (lhs.type === "float" || rhs.type === "float") ? "float" : "int";

  switch (ctx.op.type) {
  case ExpressionLexer.ASTERISK:
    //console.log("--- *");
    if (lhs.type === 'text' || rhs.type === 'text') {
      var text = "";
      var valid = false;
      if (lhs.type === 'int') {
        valid = true;
        for (i=0;i<lhs.value;i++) text += rhs.value;
      } else if (rhs.type === 'int') {
        valid = true;
        for (i=0;i<rhs.value;i++) text += lhs.value;
      }
      if (valid) {
        return {"result":true, "value":text, "type":"text"};
      } else {
        return {"result":false, "value":null, "error":"Invalid operation."};
      }
    } else {
      return {"result":true, "value":lhs.value * rhs.value, "type":type};
    }
    break;
  case ExpressionLexer.SLASH:
    //console.log("--- /");
    if (rhs.type === 'text' || lhs.type === 'text') {
      return {"result":false, "value":null, "error":"Invalid operation."};
    }
    if (rhs.value === 0) {
      if (lhs.value === 0) {
        return {"result":true, "value":NaN};
      } else {
        return {"result":false, "value":null, "error":"Division by zero."};
      }
    } else {
      if (!(lhs.value % rhs.value === 0)) {
        type = "float";
      }
      return {"result":true, "value":lhs.value / rhs.value, "type":type};
    }
    break;
  default:
    return {"result":false, "value":null, "error":"Unknown operator"};
    break;
  }
};


// Visit a parse tree produced by ExpressionParser#expr_function.
ExpressionVisitor.prototype.visitExpr_function = function(ctx) {
  //console.log("-- visitExpr_function");
  var token = ctx.getToken(ExpressionLexer.IDENTIFIER, 0);
  var arg = this.visit(ctx.arg);
  //console.log(ctx.id);
  //console.log(ctx.ex);
  //console.log(token);
  if (this.funcList[token.symbol.text]) { // inキーワードは使用しない
    func = this.funcList[token.symbol.text];
    return func(arg);
  } else {
    return {"result":false, "value":null, "error":"Unknown function name."};
  }
};


// Visit a parse tree produced by ExpressionParser#expr_unary.
CalcVisitor.prototype.visitExpr_unary = function(ctx) {
  //console.log("-- visitExpr_unary");
  var expr = this.visit(ctx.ex);
  if (!expr.result) {
    return {"result":false, "value":null, "error":{"expr":expr}};
  }
  //console.log(expr);
  switch (ctx.op.type) {
  case ExpressionLexer.PLUS:
    if (expr.type === 'text') {
      return {"result":false, "value":null, "error":"Invalid type."};
    }
    return expr;
  case ExpressionLexer.MINUS:
      if (expr.type === 'text') {
        return {"result":false, "value":null, "error":"Invalid type."};
      }
      return {"result":true, "value":-1 * expr.value, "type":expr.type};
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


// Visit a parse tree produced by ExpressionParser#expr_string.
CalcVisitor.prototype.visitExpr_string = function(ctx) {
  return this.visit(ctx.str);
};


// Visit a parse tree produced by ExpressionParser#paren_expr.
CalcVisitor.prototype.visitParen_expr = function(ctx) {
  //console.log("-- visitParen_expr");
  return this.visit(ctx.ex);
};


// Visit a parse tree produced by ExpressionParser#str.
ExpressionVisitor.prototype.visitStr = function(ctx) {
  //console.log("-- visitExpr_string");
  var token = ctx.getToken(ExpressionLexer.STRING, 0);
  if (token != null) {
    // ”を除いた部分をセットする
    //console.log(token.symbol.text);
    return {"result": true, "value":token.symbol.text.slice(1,-1), "type":"text"};
  }
  return {"result":false, "value":null, "error":"Unknown token"};
};


// Visit a parse tree produced by ExpressionParser#num_uint.
ExpressionVisitor.prototype.visitNum_uint = function(ctx) {
  //console.log("-- visitNum_uint");
  var token = ctx.getToken(ExpressionLexer.UINT, 0);
  if (token != null) {
    var val = parseInt(token.symbol.text);
    //console.log("val = "+val);
    return {"result": true, "value":val, "type":"int"};
  }
  return {"result":false, "value":null, "error":"Unknown token"};
};


// Visit a parse tree produced by ExpressionParser#num_float.
ExpressionVisitor.prototype.visitNum_float = function(ctx) {
  //console.log("-- visitNum_float");
  var token = ctx.getToken(ExpressionLexer.FLT, 0);
  if (token != null) {
    var val = parseFloat(token.symbol.text);
    //console.log("val = "+val);
    return {"result": true, "value":val, "type":"float"};
  }
  return {"result":false, "value":null, "error":"Unknown token"};
};


// Visit a parse tree produced by ExpressionParser#num_var.
ExpressionVisitor.prototype.visitNum_var = function(ctx) {
 //console.log("-- visitNum_var");
 var token = ctx.getToken(ExpressionLexer.IDENTIFIER, 0);
 //console.log('"'+token.symbol.text+'"');
 if (token.symbol.text in this.varList) {
   var val = this.varList[token.symbol.text];
   var type = Number.isInteger() ? "int" : "float";
   return {"result":true, "value":val, "type":type};
 } else {
   return {"result":false, "value":null, "error":"Unknown variable name."};
 }
};



exports.CalcVisitor = CalcVisitor;

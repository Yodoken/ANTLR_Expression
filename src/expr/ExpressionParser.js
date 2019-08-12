// Generated from /Users/yodogawa/IdeaProjects/ANTLR/ANTLR_Expression/src/Expression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExpressionVisitor = require('./ExpressionVisitor').ExpressionVisitor;

var grammarFileName = "Expression.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f+\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0013\n",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001e\n\u0003",
    "\f\u0003\u000e\u0003!\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005)\n\u0005\u0003\u0005",
    "\u0002\u0003\u0004\u0006\u0002\u0004\u0006\b\u0002\u0004\u0003\u0002",
    "\u0007\b\u0003\u0002\u0005\u0006\u0002,\u0002\n\u0003\u0002\u0002\u0002",
    "\u0004\u0012\u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002",
    "\b(\u0003\u0002\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002\u000b\f",
    "\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002\u0002\u0002\r\u000e\b\u0003",
    "\u0001\u0002\u000e\u0013\u0005\b\u0005\u0002\u000f\u0013\u0005\u0006",
    "\u0004\u0002\u0010\u0011\t\u0002\u0002\u0002\u0011\u0013\u0005\u0004",
    "\u0003\u0006\u0012\r\u0003\u0002\u0002\u0002\u0012\u000f\u0003\u0002",
    "\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0013\u001f\u0003\u0002",
    "\u0002\u0002\u0014\u0015\f\u0005\u0002\u0002\u0015\u0016\u0007\t\u0002",
    "\u0002\u0016\u001e\u0005\u0004\u0003\u0005\u0017\u0018\f\u0004\u0002",
    "\u0002\u0018\u0019\t\u0003\u0002\u0002\u0019\u001e\u0005\u0004\u0003",
    "\u0005\u001a\u001b\f\u0003\u0002\u0002\u001b\u001c\t\u0002\u0002\u0002",
    "\u001c\u001e\u0005\u0004\u0003\u0004\u001d\u0014\u0003\u0002\u0002\u0002",
    "\u001d\u0017\u0003\u0002\u0002\u0002\u001d\u001a\u0003\u0002\u0002\u0002",
    "\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 \u0005\u0003\u0002\u0002\u0002!\u001f",
    "\u0003\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#$\u0005\u0004\u0003",
    "\u0002$%\u0007\u0004\u0002\u0002%\u0007\u0003\u0002\u0002\u0002&)\u0007",
    "\n\u0002\u0002\')\u0007\u000b\u0002\u0002(&\u0003\u0002\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002)\t\u0003\u0002\u0002\u0002\u0006\u0012\u001d",
    "\u001f("].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'*'", "'/'", "'+'", "'-'", "'^'" ];

var symbolicNames = [ null, "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "SLASH", 
                      "PLUS", "MINUS", "HAT", "UINT", "FLT", "WS" ];

var ruleNames =  [ "input", "expr", "paren_expr", "num" ];

function ExpressionParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExpressionParser.prototype = Object.create(antlr4.Parser.prototype);
ExpressionParser.prototype.constructor = ExpressionParser;

Object.defineProperty(ExpressionParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExpressionParser.EOF = antlr4.Token.EOF;
ExpressionParser.OPEN_PAREN = 1;
ExpressionParser.CLOSE_PAREN = 2;
ExpressionParser.ASTERISK = 3;
ExpressionParser.SLASH = 4;
ExpressionParser.PLUS = 5;
ExpressionParser.MINUS = 6;
ExpressionParser.HAT = 7;
ExpressionParser.UINT = 8;
ExpressionParser.FLT = 9;
ExpressionParser.WS = 10;

ExpressionParser.RULE_input = 0;
ExpressionParser.RULE_expr = 1;
ExpressionParser.RULE_paren_expr = 2;
ExpressionParser.RULE_num = 3;


function InputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExpressionParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;

InputContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

InputContext.prototype.EOF = function() {
    return this.getToken(ExpressionParser.EOF, 0);
};

InputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitInput(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExpressionParser.InputContext = InputContext;

ExpressionParser.prototype.input = function() {

    var localctx = new InputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExpressionParser.RULE_input);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.expr(0);
        this.state = 9;
        this.match(ExpressionParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExpressionParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function Expr_additiveContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.lhs = null; // ExprContext;
    this.op = null; // Token;
    this.rhs = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_additiveContext.prototype = Object.create(ExprContext.prototype);
Expr_additiveContext.prototype.constructor = Expr_additiveContext;

ExpressionParser.Expr_additiveContext = Expr_additiveContext;

Expr_additiveContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Expr_additiveContext.prototype.PLUS = function() {
    return this.getToken(ExpressionParser.PLUS, 0);
};

Expr_additiveContext.prototype.MINUS = function() {
    return this.getToken(ExpressionParser.MINUS, 0);
};
Expr_additiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_additive(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Expr_numContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.no = null; // NumContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_numContext.prototype = Object.create(ExprContext.prototype);
Expr_numContext.prototype.constructor = Expr_numContext;

ExpressionParser.Expr_numContext = Expr_numContext;

Expr_numContext.prototype.num = function() {
    return this.getTypedRuleContext(NumContext,0);
};
Expr_numContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_num(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Expr_powerContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.lhs = null; // ExprContext;
    this.op = null; // Token;
    this.rhs = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_powerContext.prototype = Object.create(ExprContext.prototype);
Expr_powerContext.prototype.constructor = Expr_powerContext;

ExpressionParser.Expr_powerContext = Expr_powerContext;

Expr_powerContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Expr_powerContext.prototype.HAT = function() {
    return this.getToken(ExpressionParser.HAT, 0);
};
Expr_powerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_power(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Expr_multipricativeContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.lhs = null; // ExprContext;
    this.op = null; // Token;
    this.rhs = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_multipricativeContext.prototype = Object.create(ExprContext.prototype);
Expr_multipricativeContext.prototype.constructor = Expr_multipricativeContext;

ExpressionParser.Expr_multipricativeContext = Expr_multipricativeContext;

Expr_multipricativeContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Expr_multipricativeContext.prototype.ASTERISK = function() {
    return this.getToken(ExpressionParser.ASTERISK, 0);
};

Expr_multipricativeContext.prototype.SLASH = function() {
    return this.getToken(ExpressionParser.SLASH, 0);
};
Expr_multipricativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_multipricative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Expr_unaryContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    this.ex = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_unaryContext.prototype = Object.create(ExprContext.prototype);
Expr_unaryContext.prototype.constructor = Expr_unaryContext;

ExpressionParser.Expr_unaryContext = Expr_unaryContext;

Expr_unaryContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Expr_unaryContext.prototype.PLUS = function() {
    return this.getToken(ExpressionParser.PLUS, 0);
};

Expr_unaryContext.prototype.MINUS = function() {
    return this.getToken(ExpressionParser.MINUS, 0);
};
Expr_unaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_unary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Expr_noneContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.ex = null; // Paren_exprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Expr_noneContext.prototype = Object.create(ExprContext.prototype);
Expr_noneContext.prototype.constructor = Expr_noneContext;

ExpressionParser.Expr_noneContext = Expr_noneContext;

Expr_noneContext.prototype.paren_expr = function() {
    return this.getTypedRuleContext(Paren_exprContext,0);
};
Expr_noneContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitExpr_none(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExpressionParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExpressionParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExpressionParser.UINT:
        case ExpressionParser.FLT:
            localctx = new Expr_numContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 12;
            localctx.no = this.num();
            break;
        case ExpressionParser.OPEN_PAREN:
            localctx = new Expr_noneContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            localctx.ex = this.paren_expr();
            break;
        case ExpressionParser.PLUS:
        case ExpressionParser.MINUS:
            localctx = new Expr_unaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===ExpressionParser.PLUS || _la===ExpressionParser.MINUS)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 15;
            localctx.ex = this.expr(4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 29;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 27;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Expr_powerContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExpressionParser.RULE_expr);
                    this.state = 18;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 19;
                    localctx.op = this.match(ExpressionParser.HAT);
                    this.state = 20;
                    localctx.rhs = this.expr(3);
                    break;

                case 2:
                    localctx = new Expr_multipricativeContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExpressionParser.RULE_expr);
                    this.state = 21;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 22;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExpressionParser.ASTERISK || _la===ExpressionParser.SLASH)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 23;
                    localctx.rhs = this.expr(3);
                    break;

                case 3:
                    localctx = new Expr_additiveContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.lhs = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExpressionParser.RULE_expr);
                    this.state = 24;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 25;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExpressionParser.PLUS || _la===ExpressionParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 26;
                    localctx.rhs = this.expr(2);
                    break;

                } 
            }
            this.state = 31;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Paren_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExpressionParser.RULE_paren_expr;
    this.ex = null; // ExprContext
    return this;
}

Paren_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Paren_exprContext.prototype.constructor = Paren_exprContext;

Paren_exprContext.prototype.OPEN_PAREN = function() {
    return this.getToken(ExpressionParser.OPEN_PAREN, 0);
};

Paren_exprContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(ExpressionParser.CLOSE_PAREN, 0);
};

Paren_exprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Paren_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitParen_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExpressionParser.Paren_exprContext = Paren_exprContext;

ExpressionParser.prototype.paren_expr = function() {

    var localctx = new Paren_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExpressionParser.RULE_paren_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(ExpressionParser.OPEN_PAREN);
        this.state = 33;
        localctx.ex = this.expr(0);
        this.state = 34;
        this.match(ExpressionParser.CLOSE_PAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExpressionParser.RULE_num;
    return this;
}

NumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumContext.prototype.constructor = NumContext;


 
NumContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Num_floatContext(parser, ctx) {
	NumContext.call(this, parser);
    NumContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Num_floatContext.prototype = Object.create(NumContext.prototype);
Num_floatContext.prototype.constructor = Num_floatContext;

ExpressionParser.Num_floatContext = Num_floatContext;

Num_floatContext.prototype.FLT = function() {
    return this.getToken(ExpressionParser.FLT, 0);
};
Num_floatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitNum_float(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Num_uintContext(parser, ctx) {
	NumContext.call(this, parser);
    NumContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Num_uintContext.prototype = Object.create(NumContext.prototype);
Num_uintContext.prototype.constructor = Num_uintContext;

ExpressionParser.Num_uintContext = Num_uintContext;

Num_uintContext.prototype.UINT = function() {
    return this.getToken(ExpressionParser.UINT, 0);
};
Num_uintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExpressionVisitor ) {
        return visitor.visitNum_uint(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExpressionParser.NumContext = NumContext;

ExpressionParser.prototype.num = function() {

    var localctx = new NumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExpressionParser.RULE_num);
    try {
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExpressionParser.UINT:
            localctx = new Num_uintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.match(ExpressionParser.UINT);
            break;
        case ExpressionParser.FLT:
            localctx = new Num_floatContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.match(ExpressionParser.FLT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExpressionParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExpressionParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExpressionParser = ExpressionParser;

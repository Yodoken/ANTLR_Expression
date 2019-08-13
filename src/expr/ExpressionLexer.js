// Generated from src/Expression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000eR\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0006\n-",
    "\n\n\r\n\u000e\n.\u0003\u000b\u0006\u000b2\n\u000b\r\u000b\u000e\u000b",
    "3\u0003\u000b\u0003\u000b\u0007\u000b8\n\u000b\f\u000b\u000e\u000b;",
    "\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b?\n\u000b\u0003\u000b",
    "\u0006\u000bB\n\u000b\r\u000b\u000e\u000bC\u0005\u000bF\n\u000b\u0003",
    "\f\u0003\f\u0007\fJ\n\f\f\f\u000e\fM\u000b\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u0003\u0002\b\u0003\u00022;\u0004\u0002GGgg\u0004\u0002--//\u0005\u0002",
    "C\\aac|\u0006\u00022;C\\aac|\u0005\u0002\"\"vv\u00a7\u00a7\u0002X\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003",
    "\u001b\u0003\u0002\u0002\u0002\u0005\u001d\u0003\u0002\u0002\u0002\u0007",
    "\u001f\u0003\u0002\u0002\u0002\t!\u0003\u0002\u0002\u0002\u000b#\u0003",
    "\u0002\u0002\u0002\r%\u0003\u0002\u0002\u0002\u000f\'\u0003\u0002\u0002",
    "\u0002\u0011)\u0003\u0002\u0002\u0002\u0013,\u0003\u0002\u0002\u0002",
    "\u00151\u0003\u0002\u0002\u0002\u0017G\u0003\u0002\u0002\u0002\u0019",
    "N\u0003\u0002\u0002\u0002\u001b\u001c\u0007*\u0002\u0002\u001c\u0004",
    "\u0003\u0002\u0002\u0002\u001d\u001e\u0007+\u0002\u0002\u001e\u0006",
    "\u0003\u0002\u0002\u0002\u001f \u0007,\u0002\u0002 \b\u0003\u0002\u0002",
    "\u0002!\"\u00071\u0002\u0002\"\n\u0003\u0002\u0002\u0002#$\u0007-\u0002",
    "\u0002$\f\u0003\u0002\u0002\u0002%&\u0007/\u0002\u0002&\u000e\u0003",
    "\u0002\u0002\u0002\'(\u0007`\u0002\u0002(\u0010\u0003\u0002\u0002\u0002",
    ")*\u0007.\u0002\u0002*\u0012\u0003\u0002\u0002\u0002+-\t\u0002\u0002",
    "\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.,\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/\u0014\u0003\u0002\u0002\u0002",
    "02\t\u0002\u0002\u000210\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000259\u00070\u0002\u000268\t\u0002\u0002\u000276\u0003\u0002",
    "\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003",
    "\u0002\u0002\u0002:E\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002",
    "<>\t\u0003\u0002\u0002=?\t\u0004\u0002\u0002>=\u0003\u0002\u0002\u0002",
    ">?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002\u0002@B\t\u0002\u0002",
    "\u0002A@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0003\u0002\u0002\u0002E<\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0016\u0003\u0002\u0002",
    "\u0002GK\t\u0005\u0002\u0002HJ\t\u0006\u0002\u0002IH\u0003\u0002\u0002",
    "\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002",
    "\u0002\u0002L\u0018\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002",
    "NO\t\u0007\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\b\r\u0002\u0002Q",
    "\u001a\u0003\u0002\u0002\u0002\n\u0002.39>CEK\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExpressionLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExpressionLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExpressionLexer.prototype.constructor = ExpressionLexer;

Object.defineProperty(ExpressionLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ExpressionLexer.EOF = antlr4.Token.EOF;
ExpressionLexer.OPEN_PAREN = 1;
ExpressionLexer.CLOSE_PAREN = 2;
ExpressionLexer.ASTERISK = 3;
ExpressionLexer.SLASH = 4;
ExpressionLexer.PLUS = 5;
ExpressionLexer.MINUS = 6;
ExpressionLexer.HAT = 7;
ExpressionLexer.COMMA = 8;
ExpressionLexer.UINT = 9;
ExpressionLexer.FLT = 10;
ExpressionLexer.IDENTIFIER = 11;
ExpressionLexer.WS = 12;

ExpressionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExpressionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExpressionLexer.prototype.literalNames = [ null, "'('", "')'", "'*'", "'/'", 
                                           "'+'", "'-'", "'^'", "','" ];

ExpressionLexer.prototype.symbolicNames = [ null, "OPEN_PAREN", "CLOSE_PAREN", 
                                            "ASTERISK", "SLASH", "PLUS", 
                                            "MINUS", "HAT", "COMMA", "UINT", 
                                            "FLT", "IDENTIFIER", "WS" ];

ExpressionLexer.prototype.ruleNames = [ "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", 
                                        "SLASH", "PLUS", "MINUS", "HAT", 
                                        "COMMA", "UINT", "FLT", "IDENTIFIER", 
                                        "WS" ];

ExpressionLexer.prototype.grammarFileName = "Expression.g4";



exports.ExpressionLexer = ExpressionLexer;


// Generated from /Users/yodogawa/IdeaProjects/ANTLR/ANTLR_Expression/src/Expression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000b,\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0006",
    "\t%\n\t\r\t\u000e\t&\u0003\n\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0003\u0002\u0004\u0003\u00022;\u0005\u0002\"\"",
    "vv\u00a7\u00a7\u0002,\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0003\u0015",
    "\u0003\u0002\u0002\u0002\u0005\u0017\u0003\u0002\u0002\u0002\u0007\u0019",
    "\u0003\u0002\u0002\u0002\t\u001b\u0003\u0002\u0002\u0002\u000b\u001d",
    "\u0003\u0002\u0002\u0002\r\u001f\u0003\u0002\u0002\u0002\u000f!\u0003",
    "\u0002\u0002\u0002\u0011$\u0003\u0002\u0002\u0002\u0013(\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0007*\u0002\u0002\u0016\u0004\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0007+\u0002\u0002\u0018\u0006\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007,\u0002\u0002\u001a\b\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u00071\u0002\u0002\u001c\n\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007-\u0002\u0002\u001e\f\u0003\u0002\u0002\u0002\u001f",
    " \u0007/\u0002\u0002 \u000e\u0003\u0002\u0002\u0002!\"\u0007`\u0002",
    "\u0002\"\u0010\u0003\u0002\u0002\u0002#%\t\u0002\u0002\u0002$#\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002",
    "&\'\u0003\u0002\u0002\u0002\'\u0012\u0003\u0002\u0002\u0002()\t\u0003",
    "\u0002\u0002)*\u0003\u0002\u0002\u0002*+\b\n\u0002\u0002+\u0014\u0003",
    "\u0002\u0002\u0002\u0004\u0002&\u0003\b\u0002\u0002"].join("");


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
ExpressionLexer.UINT = 8;
ExpressionLexer.WS = 9;

ExpressionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExpressionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExpressionLexer.prototype.literalNames = [ null, "'('", "')'", "'*'", "'/'", 
                                           "'+'", "'-'", "'^'" ];

ExpressionLexer.prototype.symbolicNames = [ null, "OPEN_PAREN", "CLOSE_PAREN", 
                                            "ASTERISK", "SLASH", "PLUS", 
                                            "MINUS", "HAT", "UINT", "WS" ];

ExpressionLexer.prototype.ruleNames = [ "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", 
                                        "SLASH", "PLUS", "MINUS", "HAT", 
                                        "UINT", "WS" ];

ExpressionLexer.prototype.grammarFileName = "Expression.g4";



exports.ExpressionLexer = ExpressionLexer;


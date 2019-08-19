// Generated from src/Expression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000f]\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0006\n/\n\n\r\n\u000e\n0\u0003\u000b\u0006\u000b4\n\u000b",
    "\r\u000b\u000e\u000b5\u0003\u000b\u0003\u000b\u0007\u000b:\n\u000b\f",
    "\u000b\u000e\u000b=\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "A\n\u000b\u0003\u000b\u0006\u000bD\n\u000b\r\u000b\u000e\u000bE\u0005",
    "\u000bH\n\u000b\u0003\f\u0003\f\u0007\fL\n\f\f\f\u000e\fO\u000b\f\u0003",
    "\r\u0003\r\u0007\rS\n\r\f\r\u000e\rV\u000b\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0002\u000f\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u0003\u0002\t\u0003\u00022",
    ";\u0004\u0002GGgg\u0004\u0002--//\u0005\u0002C\\aac|\u0006\u00022;C",
    "\\aac|\u0003\u0002$$\u0005\u0002\"\"vv\u00a7\u00a7\u0002d\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002\u0002\u0005\u001f",
    "\u0003\u0002\u0002\u0002\u0007!\u0003\u0002\u0002\u0002\t#\u0003\u0002",
    "\u0002\u0002\u000b%\u0003\u0002\u0002\u0002\r\'\u0003\u0002\u0002\u0002",
    "\u000f)\u0003\u0002\u0002\u0002\u0011+\u0003\u0002\u0002\u0002\u0013",
    ".\u0003\u0002\u0002\u0002\u00153\u0003\u0002\u0002\u0002\u0017I\u0003",
    "\u0002\u0002\u0002\u0019P\u0003\u0002\u0002\u0002\u001bY\u0003\u0002",
    "\u0002\u0002\u001d\u001e\u0007*\u0002\u0002\u001e\u0004\u0003\u0002",
    "\u0002\u0002\u001f \u0007+\u0002\u0002 \u0006\u0003\u0002\u0002\u0002",
    "!\"\u0007,\u0002\u0002\"\b\u0003\u0002\u0002\u0002#$\u00071\u0002\u0002",
    "$\n\u0003\u0002\u0002\u0002%&\u0007-\u0002\u0002&\f\u0003\u0002\u0002",
    "\u0002\'(\u0007/\u0002\u0002(\u000e\u0003\u0002\u0002\u0002)*\u0007",
    "`\u0002\u0002*\u0010\u0003\u0002\u0002\u0002+,\u0007.\u0002\u0002,\u0012",
    "\u0003\u0002\u0002\u0002-/\t\u0002\u0002\u0002.-\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002",
    "\u00021\u0014\u0003\u0002\u0002\u000224\t\u0002\u0002\u000232\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027;\u00070\u0002",
    "\u00028:\t\u0002\u0002\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002",
    "\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<G\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>@\t\u0003\u0002\u0002?",
    "A\t\u0004\u0002\u0002@?\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002BD\t\u0002\u0002\u0002CB\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003",
    "\u0002\u0002\u0002FH\u0003\u0002\u0002\u0002G>\u0003\u0002\u0002\u0002",
    "GH\u0003\u0002\u0002\u0002H\u0016\u0003\u0002\u0002\u0002IM\t\u0005",
    "\u0002\u0002JL\t\u0006\u0002\u0002KJ\u0003\u0002\u0002\u0002LO\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "N\u0018\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PT\u0007$\u0002",
    "\u0002QS\n\u0007\u0002\u0002RQ\u0003\u0002\u0002\u0002SV\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UW\u0003",
    "\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007$\u0002\u0002X\u001a",
    "\u0003\u0002\u0002\u0002YZ\t\b\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[\\\b\u000e\u0002\u0002\\\u001c\u0003\u0002\u0002\u0002\u000b\u0002",
    "05;@EGMT\u0003\b\u0002\u0002"].join("");


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
ExpressionLexer.STRING = 12;
ExpressionLexer.WS = 13;

ExpressionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ExpressionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExpressionLexer.prototype.literalNames = [ null, "'('", "')'", "'*'", "'/'", 
                                           "'+'", "'-'", "'^'", "','" ];

ExpressionLexer.prototype.symbolicNames = [ null, "OPEN_PAREN", "CLOSE_PAREN", 
                                            "ASTERISK", "SLASH", "PLUS", 
                                            "MINUS", "HAT", "COMMA", "UINT", 
                                            "FLT", "IDENTIFIER", "STRING", 
                                            "WS" ];

ExpressionLexer.prototype.ruleNames = [ "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", 
                                        "SLASH", "PLUS", "MINUS", "HAT", 
                                        "COMMA", "UINT", "FLT", "IDENTIFIER", 
                                        "STRING", "WS" ];

ExpressionLexer.prototype.grammarFileName = "Expression.g4";



exports.ExpressionLexer = ExpressionLexer;


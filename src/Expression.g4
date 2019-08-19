grammar Expression;

// 構文定義
input
    : expr EOF
    ;

expr
    : no=num                                    #expr_num
    | ex=paren_expr                             #expr_none
    | str=string                                #expr_string
    | func=IDENTIFIER OPEN_PAREN arg=expr CLOSE_PAREN  #expr_function
    | op=(PLUS | MINUS) ex=expr                 #expr_unary
    | <assoc=right> lhs=expr op=HAT rhs=expr    #expr_power
    | lhs=expr op=(ASTERISK | SLASH) rhs=expr   #expr_multipricative
    | lhs=expr op=(PLUS | MINUS) rhs=expr       #expr_additive
    ;

paren_expr
    : OPEN_PAREN ex=expr CLOSE_PAREN
    ;

string
    : text=STRING                               #str
    ;

num
    : UINT                                      #num_uint
    | FLT                                       #num_float
    | IDENTIFIER                                #num_var
    ;

// 字句定義
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
ASTERISK: '*';
SLASH: '/';
PLUS: '+';
MINUS: '-';
HAT: '^';
COMMA: ',';
UINT: [0-9]+;
FLT: [0-9]+ '.' [0-9]* ([Ee] [+-]? [0-9]+)?;
IDENTIFIER: [A-Za-z_] [A-Za-z0-9_]*;
STRING: '"' (~'"')* '"';
WS: [ ¥t] -> skip;

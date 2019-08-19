
var Calculator = require('../src/Calculator.js').Calculator;

describe('Expressionテスト', function() {
    var calculator = new Calculator();

    describe('Homework-1', function() {
        it("1", function() {
            expect(calculator.doCalc("1")).toEqual({'result':true,'value':1,'type':'int'});
        });
        it("-1", function() {
            expect(calculator.doCalc("-1")).toEqual({'result':true,'value':-1,'type':'int'});
        });
        it("1+2=3", function() {
            expect(calculator.doCalc("1+2")).toEqual({'result':true,'value':3,'type':'int'});
        });
        it("3-1=2", function() {
            expect(calculator.doCalc("3-1")).toEqual({'result':true,'value':2,'type':'int'});
        });
        it("3+1-2=2", function() {
            expect(calculator.doCalc("3+1-2")).toEqual({'result':true,'value':2,'type':'int'});
        });
        it("1+2*3=7", function() {
            expect(calculator.doCalc("1+2*3")).toEqual({'result':true,'value':7,'type':'int'});
        });
        it("3*2+1=7", function() {
            expect(calculator.doCalc("1+2*3")).toEqual({'result':true,'value':7,'type':'int'});
        });
        it("(1+2)*3=9", function() {
            expect(calculator.doCalc("(1+2)*3")).toEqual({'result':true,'value':9,'type':'int'});
        });
        it("3*(2+1)=9", function() {
            expect(calculator.doCalc("3*(2+1)")).toEqual({'result':true,'value':9,'type':'int'});
        });
        it("2^2=4", function() {
            expect(calculator.doCalc("2^2")).toEqual({'result':true,'value':4,'type':'int'});
        });
        it("-1+2^2=3", function() {
            expect(calculator.doCalc("-1+2^2")).toEqual({'result':true,'value':3,'type':'int'});
        });
        it("-1+2^(2+1)=7", function() {
            expect(calculator.doCalc("-1+2^(2+1)")).toEqual({'result':true,'value':7,'type':'int'});
        });
    });

    describe('Homework-2', function() {
        it("2.0", function() {
            expect(calculator.doCalc("2.0")).toEqual({'result':true,'value':2.0,'type':'float'});
        });
        it("1+2.0=3.0", function() {
            expect(calculator.doCalc("1+2.0")).toEqual({'result':true,'value':3.0,'type':'float'});
        });
        it("(1+2.0)*3=9.0", function() {
            expect(calculator.doCalc("(1+2.0)*3")).toEqual({'result':true,'value':9.0,'type':'float'});
        });
        it("(1+2)*3^2=9", function() {
            expect(calculator.doCalc("(1+2)*3^2")).toEqual({'result':true,'value':27,'type':'int'});
        });
        it("(1+2)*3^2.0=9", function() {
            expect(calculator.doCalc("(1+2)*3^2.0")).toEqual({'result':true,'value':27.0,'type':'float'});
        });
        it("2^-2=0.25", function() {
            expect(calculator.doCalc("2^-2")).toEqual({'result':true,'value':0.25,'type':'float'});
        });
        it("(1+0/0)*3=NaN", function() {
            expect(calculator.doCalc("(1+0/0)*3")).toEqual({'result':true,'value':NaN,'type':'int'});
        });
    });

    describe('Homework-3/4', function() {
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
        calculator.registerConst("ZERO", 0);
        calculator.registerConst("PI", Math.PI);
                
        it("Sin(0)", function() {
            expect(calculator.doCalc("Sin(0)")).toEqual({'result':true,'value':0.0,'type':'float'});
        });
        it("Cos(0)", function() {
            expect(calculator.doCalc("Cos(0)")).toEqual({'result':true,'value':1.0,'type':'float'});
        });
        it("Tan(0)", function() {
            expect(calculator.doCalc("Tan(0)")).toEqual({'result':true,'value':0.0,'type':'float'});
        });
        it("Sin(PI)", function() {
            expect(calculator.doCalc("Sin(PI)")).toEqual({'result':true,'value':Math.sin(Math.PI),'type':'float'});
        });
        it("Cos(PI)", function() {
            expect(calculator.doCalc("Cos(PI)")).toEqual({'result':true,'value':Math.cos(Math.PI),'type':'float'});
        });
        it("Tan(PI)", function() {
            expect(calculator.doCalc("Tan(PI)")).toEqual({'result':true,'value':Math.tan(Math.PI),'type':'float'});
        });
    });

    describe('Homework-5', function() {
        calculator.registerFunction("Length", function(arg) {
            console.log('callback:Length("'+arg.type+'")');
            if (arg.type === "text") {
                return {"result":true, "value":arg.value.length, "type":"int"};
            }
            return {"result":false, "value":null, "error":"Invalid type"};
        });
                        
        it('"abc"', function() {
            expect(calculator.doCalc('"abc"')).toEqual({'result':true,'value':'abc','type':'text'});
        });
        it('"abc"+"def"', function() {
            expect(calculator.doCalc('"abc"+"def"')).toEqual({'result':true,'value':'abcdef','type':'text'});
        });
        it('"abc"+345', function() {
            expect(calculator.doCalc('"abc"+345')).toEqual({'result':true,'value':'abc345','type':'text'});
        });
        it('"ab"+"cd"*3', function() {
            expect(calculator.doCalc('"ab"+"cd"*3')).toEqual({'result':true,'value':'abcdcdcd','type':'text'});
        });
        it('"ab"+3*"cd"', function() {
            expect(calculator.doCalc('"ab"+3*"cd"')).toEqual({'result':true,'value':'abcdcdcd','type':'text'});
        });
        it('"ab"+(1+2)*"cd"', function() {
            expect(calculator.doCalc('"ab"+(1+2)*"cd"')).toEqual({'result':true,'value':'abcdcdcd','type':'text'});
        });
        it('"abc"-"def"', function() {
            expect(calculator.doCalc('"abc"-"def"').result).toEqual(false);
        });
        it('"abc"*"def"', function() {
            expect(calculator.doCalc('"abc"*"def"').result).toEqual(false);
        });
        it('"abc"/"def"', function() {
            expect(calculator.doCalc('"abc"/"def"').result).toEqual(false);
        });
        it('"abc"^"def"', function() {
            expect(calculator.doCalc('"abc"^"def"').result).toEqual(false);
        });
        it('"abc"-2', function() {
            expect(calculator.doCalc('"abc"-2').result).toEqual(false);
        });
        it('1-"abc"', function() {
            expect(calculator.doCalc('1-"abc"').result).toEqual(false);
        });
        it('2/"def"', function() {
            expect(calculator.doCalc('2/"def"').result).toEqual(false);
        });
        it('"abc"/2', function() {
            expect(calculator.doCalc('"abc"/2').result).toEqual(false);
        });
        it('"abc"^2', function() {
            expect(calculator.doCalc('"abc"^2').result).toEqual(false);
        });
    });
});


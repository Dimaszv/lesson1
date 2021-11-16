var a = 5;
var b = 7;
console.log(" До перестановки: a = " + a +", b= " + b );
a = a + b;
b = a - b;
a = a - b;
console.log(" После перестановки: a = " + a + ", b= " + b );
var a, b, s = 0, odd = "";
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
if (a < b) {
    for (var i = a; i < b; i++) {
        s += i; 
        if (i % 2 != 0) {
            odd += i + " ";
        }
    }
    alert(s);
    alert(odd);
}
else {
    alert("Error: a >= b");
}
var a, b, c;
a = Number(prompt("Enter a:"));
b = Number(prompt("Enter b:"));
c = Number(prompt("Enter c:"));
if ((a > b) && (a > c)) {
    alert(a);
}
else if ((b > a) && (b > c)) {
    alert(b);
}
else if ((c > a) && (c > b)) {
    alert(c);
}
else {
    alert("Two or more identical numbers");
}
// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

var a = +prompt("Enter number:");
var b = +prompt("Enter number:");
var sign = prompt("Enter sign:");
function calculate(a, b, sign) {
    var result;
    if (isNaN(a) || isNaN(b)){
        alert("One if arguments is not a number!")
    }
    switch (sign) {
        case "+" : {
            result = a + b;
            break;
        }
        case "-" : {
            result = a - b;
            break;
        }
        case "/" : {
            result = a / b;
            break;
        }
        case "*" : {
            result = a * b;
            break;
        }
        default: {
            alert("Unsupported operation!");
            return;
        }
    }
    return result;
}

result = calculate(a, b, sign);
if (result != undefined) {
    alert(result);
}
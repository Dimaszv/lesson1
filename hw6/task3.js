// Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение.

//         function checkPositive(arr) {


//         checkPositive([1, 2, 3, -4, 5]);

//         ##########################################################

// 
var num = [1, 2, 3, -4, 5];    
 function checkPositive(arr) {
     return arr > 0   
     }
    console.log (num.some(checkPositive));
 
 
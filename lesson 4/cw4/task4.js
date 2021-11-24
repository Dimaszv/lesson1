// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6

// ########
function getLongestWord(params){
    // разбить строку по пробелу
    // прйтись по полученному масиву
    // вывести в консоль длину каждого элемента
    // обьяить перемунную max = 0
    // внутри цикла делать проверку max с элементом 
    // вернуть max

    var arr = params.split(" ");
    console.log(arr);

    var max = 0;
    for (var i = 0; i < arr.lenght; i++) {
        // console.log(arr[i].length);
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;


}
getLongestWord("The quick brown fox jumped over the lazy dog");

var result = getLongestWord("The quick brown fox jumped over the lazy dog");
// 3. Напишите функцию которая бы переворачивала предоставленную строку
// Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
// Ваш результат должен быть строкой.
// "something"

// "test" => "tset"

// ########
function reverseString (str){
    // первратить str в массив
    // вызвать на полученном масиве метод reverse
    // перевернутый массив превратить в строку
    // вернуть перевернутую строку
        var arr = str.split("");
        console.log(arr);
        var reverseArr = arr.reverse();
        console.log(reverseArr);
        var reverseStr = reverseArr.join("");
        console.log(reverseStr);
        return reverseStr;

}

reverseString('abcde');
// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]



var userArray = [];
var oddArray = ['odd', 'odd', 'odd'];
var evenArray = ['even', 'even', 'even']
var arrlLenght = prompt('What will be array lenght?');
for ( var i = 0; i < arrlLenght; i++){
    if (i % 2)
    console.log(evenArray)
    if ((i % 2) - 1)
    console.log(oddArray)
}

userArray[i] = evenArray;
userArray[i] = oddArray;
console.log(userArray)


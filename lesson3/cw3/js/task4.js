//4. Добавьте ["dog", 3] в конец варианта myArray и выведите в консоль.
//			Выведите в консоль первый элемент в каждом вложенном массиве.
		// Настраивать



		var myArray = [["Джон", 23], ["кот", 2]];

        //myArray.push(['dog', 3]);
        var subArray = ["dog", 3];
        var test = myArray.concat(subArray);

        
        console.log(test);
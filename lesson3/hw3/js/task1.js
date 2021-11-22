// 1. Сделать собственные примеры методов применяемых для массивов.



var commands = ["Milan", "Napoli", "PSG"];
commands.push("Chelsea", "Dynamo"); 
// добавляет сзади
console.log("Push:" + commands);

commands.shift();
// удаляет первое
console.log("Shift:" + commands);

commands.unshift("Dnepr", "Bavaria"); 
// добавляет спереди
console.log("unshif:" + commands);

commands.pop();
// удаляет с конца
console.log("Pop:" + commands);

commands.reverse();
// зеркальное отображение
console.log("reverse:" + commands);

console.log(commands);
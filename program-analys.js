// #### Программа-анализатор игровых логов, получает путь к файлу логов из игры "Орел или решка". 
// По результатам анализа программа выводит в консоль следующие данные: 
// * общее количество партий; 
// * количество выигранных / проигранных партий;
// * процентное соотношение выигранных партий.

const fs = require("fs");

const data = fs.readFileSync("text.txt", "utf8");
let win = []; // количество выигрышей
let loss = []; // количество проигрышей
let part = []; // количество партий 

const countOfParties = data.split(" ").forEach(el => {
    if (el === "отгадано") {
        win.push(el);
    } else if(el === "неотгадано") {
        loss.push(el);
    } else if(el === "Партия" || el.endsWith("Партия:")) {
        part.push(el);
    }
})

const winningPercentage = `${win.length / part.length * 100}%`;

console.log(`Общее количество партий: ${part.length},
количество выигранных партий: ${win.length},
количество проигранных партий: ${loss.length},
процентное соотношение выигранных партий: ${winningPercentage}
`);


// #### Консольная игра "Орел или решка".
// * Игра загадывает случайное число (1 или 2) и предлагает пользователю угадывать его.
// * В качестве аргументов программа принимает на вход имя файла для логирования результатов каждой партии. 
// * Лог-файл представлен в виде строки. 

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const os = require("os");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const num = Math.floor((Math.random() * 2) + 1); 

const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const time = `Время: ${hours} часов ${min} минут`;


const resultOfGame = num === 1? "Орёл" : "Решка";
const file = path.join(__dirname, process.argv[2]);


const writeResult = (text) => {
    input.close();
fs.appendFile(file, text + os.EOL, err => {
    if (err) throw Error("Появилась ошибка")
        console.log("Всё записалось");
    });
}

const getGame = () => {
    input.question("Загадано число в диапазоне от 1 до 2: ", ans => {
        const answer = Number(ans);
        if (answer > num) {
            console.log("Меньше");
            writeResult(`Партия: неотгадано число ${num} - Это не ${resultOfGame}, ${time}`);    
        }

        if (answer < num)  {
            console.log("Больше");
            writeResult(`Партия: неотгадано число ${num} - Это не ${resultOfGame}, ${time}`);
        }

        if (answer === num) {
            console.log(`Отгадано число: ${num}`);
            writeResult(`Партия: отгадано число ${num} - Это ${resultOfGame}, ${time}`);
        }
    });
};

getGame()








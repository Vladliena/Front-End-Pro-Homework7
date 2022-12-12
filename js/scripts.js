//Task 1

let number = 10;
let result = ''

while (number < 21) {
    if (number === 20) {
        result += number
    } else result += `${number}, `
    number++
}
console.group(`Вивести на сторінку в один рядок через кому числа від 10 до 20 - ${result}`)


//Task 2

let multiplication;
let sum = '';
for (let i = 10; i <= 20; i++) {
    multiplication = i * i;
    if (i === 20) {
        sum += multiplication
    } else sum += `${multiplication}, `
}
console.group(`Вивести квадрати чисел від 10 до 20 - ${sum}`)


//Task 3

for (let j = 1; j <= 10; j++) {
    sum = j * 7;
    console.group(`Вивести таблицю множення на 7: ${j} * 7 = ${sum}`)
}


//Task 4

let numberTask4 = 15;
let sumTask4 = 0;

for (let i = 15; numberTask4 <=35; i = i*numberTask4){
    numberTask4++;
    sumTask4 = i;
}

console.group(`Знайти добуток усіх цілих чисел від 15 до 35. ${sumTask4}`);

//Task 5




// Task 6


let i = 30;
let sumTask6 = 0;

while (i <= 80){
    if (!(i%2)){
        sumTask6 = sumTask6 + i
    }
    i++;
}
console.group(`Вивести суму лише парних чисел в діапазоні від 30 до 80: ${sumTask6}`);






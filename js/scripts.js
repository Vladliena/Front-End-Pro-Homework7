//Task 1

console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20')

let number = 10;
let result = ''

while (number < 21) {
    if (number === 20) {
        result += number
    } else result += `${number}, `
    number++
}
console.log( ` ${result}`)
console.groupEnd()


//Task 2

console.group(`Вивести квадрати чисел від 10 до 20`)

for (let i = 10; i <= 20; i++) {
    console.log(i*i)
}
console.groupEnd()


//Task 3

for (let j = 1; j <= 10; j++) {
    let sum = j * 7;
    console.group(`Вивести таблицю множення на 7: ${j} * 7`)
    console.log(`${sum}`)
    console.groupEnd()
}


//Task 4

let numberTask4 = 1;

for (let i = 15; i <=35; numberTask4 = i * ++i){
    console.log(numberTask4)
}


//Task 5

console.group(`Знайти середнє арифметичне всіх цілих чисел від 1 до 500.`)

let averageArithmetic = 0;
let numberTask5 = 500;

for (let i = 1; i<500; averageArithmetic += i){
    i++
}

console.log(averageArithmetic / numberTask5)
console.groupEnd()

// Task 6

console.group(`Вивести суму лише парних чисел в діапазоні від 30 до 80`);
let i = 30;
let sumTask6 = 0;

while (i <= 80){
    if (!(i%2)){
        sumTask6 = sumTask6 + i
    }
    i++;
}

console.log(`${sumTask6}`)
console.groupEnd()






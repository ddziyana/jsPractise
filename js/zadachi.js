//При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

//При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        continue;
    }
    console.log(i);
}

//При помощи цикла for выведите чётные числа от 2 до 10 включительно

//% - остаток от деления

for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.


/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */


let i = 2;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i < 16);


//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
arr.push(i)
fifthTask()  //этот код просто скопировала и пыталась понять











for (let i = 10; i >= 1; i--) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//Задача: Напиши программу, которая выводит таблицу умножения от 1 до 5. Результат должен выглядеть примерно так:
/* 
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
...
2 x 1 = 2
2 x 2 = 4
...
5 x 5 = 25 */

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i + ':' j + '=' + i/j);
    }
};

//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

/* Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

 */

const massMark = 78;
const heightMark =1.69;
const massJohn  =92;
const heightJohn =1.95;
const BMIMark = massMark/(heightMark*heightMark);
const BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);


if (BMIMark>BMIJohn){
    console.log("Mark's BMI is higher than John's!")
} else {console.log("John's BMI is higher than Mark's!")}


if (BMIMark>BMIJohn){
    console.log("Mark's BMI" + BMIMark + "is higher than John's" + BMIJohn +"!")
} else {console.log("John's BMI" + BMIJohn + "is higher than Mark's" + BMIMark +"!")}

function calcAge(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge(1998);
console.log(age1);

//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
/* 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner. */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log('No team wins!');
    }
};

checkWinner(scoreDolphins, scoreKoalas);






const calc = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            console.log(number1 + number2);
            break;
    }
}


const bill = 100;
const calcTip = function (bill) {
    return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];
console.log(bills, tips);




const kiril = {
    name: 'tarakan',
    birthYear: 2018,
    /*  calcage: function () { return 2025 - this.birthYear; }, */
    calcage: function () { this.age = 2025 - this.birthYear; return this.age; },
    dl: false,
    education: 'student',
    friends: ['muxa', 'muha'],

    summary: function () {
        return `${this.name} is a ${this.calcage()} yo ${this.education} and he has ${this.dl ? 'a' : 'no'} drivers license.`
    }
};

console.log(kiril.summary());

console.log(kiril.calcage());
console.log(kiril.age);

//kiril is na 11 yo student and he dont have/has a drivers licence

console.log();



//function declaration 

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("muxa"));

//Function Expression

const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("muxa"));

// Arrow Function

const greet = (name) => `Hello, ${name}!`;
console.log(greet("muxa"));






const calcAge = funtion(birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, name) {
    const age = 2025 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else return 9999999;
    //return `${name} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2000, 'tarakan'));




//This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
/* 
Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. */



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi, mark.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`);
} else {
    console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`);
}


/* const calcBMI = function({mass,height}) {
  return mass / (height * height);
};

console.log(calcBMI(mark)); */


/* 
Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

 */

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals);
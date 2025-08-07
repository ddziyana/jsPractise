/* for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let g = 0; g < 3; g++) {
        console.log(g);
    }
}
 */


const length = 7;
let result = '';

for (let i = 1; i <= length; i++) {
    for (let g = 0; g < i; g++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);





//functions:

let num = 20;

function ShowFirstMessage(text) {
    console.log(text);
    let num = 10; console.log(num);
}

ShowFirstMessage('hello world');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 6));
console.log(calc(587856, 9));
console.log(calc(7, 5665));

function ret() {
    let num = 50;
    return num;
}

const AnotherNum = ret();
console.log(AnotherNum);

const usdCurr = 28;
const eurCurr = 32;

function convert (amout,curr) {
    console.log(curr * amout);
}

convert(500,usdCurr);
convert(500,eurCurr);
 "use strict";
/* alert('hello') 

 const result = confirm('are you here?');
console.log(result); 
 const answer = +prompt("r u a minor?","");
console.log(answer + 5); 
const answers = [];
answers[0] = prompt('wjats your name?','');
answers[1] = prompt('wjats your secondname?','');
answers[2] = prompt('how old are you?','');

console.log(answers); 



const category = 'toys';
console.log(`https:/someurl.com/${category}`);

 console.log(4+ +'5'); 

 let incr = 10,
decr = 10; 

 incr++;
decr--; 

 console.log(5%2);
console.log(4*2 === 8); 

 */


const burgerr = true;
const friess = true;

if (burgerr && friess) {
    console.log('im full!');
}



const burger = 3;
const fries = 1;
const cola = 1;

console.log(burger === 3 && cola === 1 && fries);

if (burger === 3 && cola === 1 && fries) {
    console.log('evryones full!');
} else {
     console.log('we leaving!');
}

const age = 6;
if (age < 18) {
    console.log('рано')
    
} 
 if (18 <= age <= 60) {
        console.log('можно')
    }
     if (age > 60) {
        console.log('нет смысла')
    }


const burger = 0;
const fries = 0;
const cola = null;

console.log(burger || cola || fries);

if (burger || cola || fries) {
    console.log('evryones full!');
} else {
     console.log('we leaving!');
}



let mariaReport, alexaReport, johnReport = 'done';
console.log(mariaReport || alexaReport || johnReport);


//задание

console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}



//for loop keeps running while condition is true

/* for (let rep = 1; rep <= 10; rep++) {
console.log(`nyancat ${rep}`);
} */

const kir = [
    'tarakan', 'student', 2025 - 2018, ['muxa', 'muha'], false
];

const types = [];

for (let i = 0; i < kir.length; i++) {
    console.log(kir[i], typeof kir[i]);

    //types[i] = typeof kir[i];
    types.push(typeof kir[i]);
}

console.log(types);

const years = [2007, 1893, 1837, 1188];
const ages = [];

for (let i = 0; i < years.length; i++) {
    let age = 2027 - years[i];
    ages.push(age);
}

console.log(ages);

// continue and break


for (let i = 0; i < kir.length; i++) {
    if (typeof kir[i] !== 'string') {
        continue;
    }
    console.log(kir[i], typeof kir[i]);
}

for (let i = 0; i < kir.length; i++) {
    if (typeof kir[i] === 'number') {
        break;
    }
    console.log(kir[i], typeof kir[i]);
}


//


const kirr = [
    'tarakan', 'student', 2025 - 2018, ['muxa', 'muha']
];


for (let i = kirr.length - 1; i >= 0; i--) {
    console.log(i, kirr[i]);
}

for (let exc = 1; exc < 4; exc++) {
    console.log(`------ exercise repetition ${exc}`);
    for (let i = 1; i < 6; i++) {
        console.log(`exercise ${exc} : lifting weight repetition ${i}`)
    }
}

//while

for (let i = 1; i < 11; i++) {
    console.log(`lifting weight repetition ${i}`)
};

let rep = 1;
while (rep < 11) {
    console.log(`lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice===6) console.log('loop is about to end..');
}
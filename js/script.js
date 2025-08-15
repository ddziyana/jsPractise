 "use strict";
const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('degrees celsius:')),
    };
    console.table(measurement);
    const kelvin = /* + */measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin(10))



const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];

const printForecast = function(arr){
    let str = '';
for(let i = 0;i<arr.length;i++){
str = str + `${arr[i]} celsium in ${i+1} days ... `
}
console.log('...' + str);
}

printForecast(data1);
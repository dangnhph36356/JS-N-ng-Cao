function sayHello(name = 'John', age = 20) {
    console.log('Hello cac ban ' + name);
}
sayHello('John');

//arrow function() => {}
// function addNumber() => {}
const addNumber = (a, b) => {
    return a + b;
}
const addNumber2 = (a, b) => a + b;
console.log(addNumber2(2, 4));

// 04 - logic - control- flow
const arr = [];
if (arr.length) {
    console.log('tructhy');
}
else console.log('fasthy');
// toán tử 3 ngôi
const age = 16;
const canDoThis = age > 18 ? 'Học cao đẳng/ đại học' : 'Học cấp 3';
console.log(canDoThis);
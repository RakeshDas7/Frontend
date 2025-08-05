// template literal (another way of creating the string) 
// syntax = `String`

const name = "John";
const a =`Hello, ${name}!`; // template literal
const b = 20
const str = "value of a : " + a + ", b : " + b + ",\nsum of a and b : " + (a + b);
console.log(str)


const str1 = `value of a : ${a}, b : ${b},
sum of a and b : ${a + b + 121}`; // template literal
console.log(str1)
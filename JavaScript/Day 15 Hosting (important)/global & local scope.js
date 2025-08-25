let x = 10;
const y = 20;

var a = 120

function f1() {
    let b = 220
    console.log("Within function x " + x)

    console.log("Within function b " + b)
}
f1()

console.log("Outside function x " + x)
console.log("Outside function b " + b)
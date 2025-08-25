// <const, let> <variable_name> = function () {}

// <const, let> <variable_name> = (list of params) => { // body}

const sayHello = (fullName) => {
    console.log(fullName, "says, Good Morning everyone!!!")
}

sayHello()
sayHello("Rakesh")

const sum = (a, b) => {
    console.log(a+b)
    return a + b
}
sum(12,20)

const square = (num) => {
    return num * num
}
const square1 = n => n * n
square(88)

const number = prompt('enter a number')
console.log(parseInt(number))
//arrow function is ame as lambda expression in java
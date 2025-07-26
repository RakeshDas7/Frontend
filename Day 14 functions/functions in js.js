// debugger
console.log("program started")

// function declaraion
//syntax => function <function_name> (list of parameters)
function hello() {
    console.log("Hello Everyone")
}

// calling the function
hello()

function add() {
    const x = 10;
    const y = 20;
    console.log("sum is = " + (x + y))
}
add()
//=============================================>

//Default parameter
function addTwoNumbers(x, y = 100) { // y is assigned with default number as 100 if we call the function and only put one number that assigned with x the y will use as default number 100
    console.log("x value is ", x)
    console.log("y value is ", y)
    console.log("Addition is ", x + y)    
}
addTwoNumbers(50, 69)

console.log("Program ended")

//=============================================>

//return keyword in function
function substractTwoNumber(x, y = 23){
    const res = x - y
    // console.log("Result is = ", res)
    return res // return keyword is used to return the value from the function
}
// calling the function and storing the result in a variable
const result = substractTwoNumber(100, 50)

console.log("Outside the function result is = ", result)
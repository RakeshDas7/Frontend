debugger
var userName = "Rakesh das"
var userAge = 22

sayHello()

function sayHello() {
    console.log(userName, "Say's Hello")
}

// sayHello()

//Function expression
// add(121,212)
const add = function (x, y) { // when a anonymous function is asigned to a variable then it is called
    let abc = 'something'
    const bcd = 'something'
    console.log("Addition is = ", x + y)
}

add(121,212)
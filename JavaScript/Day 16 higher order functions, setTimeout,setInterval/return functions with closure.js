// const a = 10;

// const outer = function(){
//     const b = 20;
//     const x = 110
//     const add = function() {
//         console.log("Addition is : ", a + b + x)
//     }

//     // add() // calling
//     return add;
// }

// const func = outer();
// // console.log('func',func)
// // console.dir(func)
// func() // calling the returned function

function f1() {
    let firstName = "Rakesh";
    let lastName = "Das";

    function f2() {
        console.log("First name is : ", firstName)
    }

    // function f3() {
    //     console.log("Last name is : ", lastName)
    // }

    return f2;
}

const printName = f1();
printName()
// function add(a, b) { // function declaration

// const add = function(a, b) { // function expression

// const add = (a, b) => { // arrow function => error - as argument is not allowed

// function add(a, b) {
//     console.log(a + b)
//     console.log('arguements', arguments)

//     // arguments.foreach(()=> console.log("Hello"))
//     console.log(arguments.length)

//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         // console.log(arguments[i]);
//         sum += arguments[i]
        
//     }
//     console.log('sum is ' + sum)
// }

// add(20, 10, 30, 40, 50)

//--------------------------------------------------------------------------------------------------------------------
//rest params -> ...args
// const sum = (...args, a, b) => {
// const sum = (a, b, ...args) => {
//     console.log('sum of a and b is : ', a + b)
//     console.log(args)
//     const sum = args.reduce((acc, current) => acc + current) 
//     console.log('sum of rest params ', sum)
// }
// sum(10, 20, 30, 40, 50)

// function printMessages(...args) {
//     args.forEach(msg => console.log(msg))
// }
// printMessages('Hello', 'World', 'This is a test', 'Another message', 'Last message', 'Another one')

//--------------------------------------------------------------------------------------------------------------------
//Spread & Destructure

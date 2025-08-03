// const s1 = 'Raj'
// const s2 = 'Amit'
// const s3 = 'Rahul'

// const students = ["Raj", "Amit", "Chandan"]
// console.log(students)
// console.log(students.length)

// // const fruits = new Array(3)
// // console.log(fruits)

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3]) //undefined
// students[3] = 'Tapan'

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// students[4] = "Dhananjaya"
// console.log(students)

// students[20] = 'Rakesh'

// students[students.length] = 'Arjun'

// students.push("Samantha")
// const removedStudent = students.pop()
// console.log(removedStudent)
// console.log(students)

// =========================================================================

const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits)

// fruits.push("Orange")
// fruits.pop()

//fruits.unshift('orange') // add at the beginning
// fruits.shift() // removes the first element
// 'orange'
// fruits.shift()
// 'Apple'
// fruits.shift()
// 'Banana'

// const isMangoincluded = fruits.includes('Mango')
// console.log(isMangoincluded)

// const isDatesincluded = fruits.includes('Dates')
// console.log(isDatesincluded)

// const moreFruits = [...fruits, 'Mango', 'Dates']
// console.log(moreFruits)

// const addFruits = ['berry', 'strawberry']
// const allFruits = fruits.concat(addFruits)
// console.log(fruits)

// fruits.reverse()
// console.log(fruits)

// slice() - returns a new Array
const moreFruits = [
  "Apple",
  "Banana",
  "Mango",
  "Dates",
  "Grapes",
  "Pineapple",
  "Watermelon",
  0,
  1,
  2,
  11,
  21,
];
// let slicedFruits = moreFruits.slice()
// slicedFruits = moreFruits.slice(2)
let slicedFruits = moreFruits.slice(2, 4); // ending index is not included
// console.log(moreFruits)
// console.log(slicedFruits)

//splice() - it deletes the elements and returns the deleted elements
// const splicedFruits = moreFruits.splice()
// const splicedFruits = moreFruits.splice(2)
const splicedFruits = moreFruits.splice(2, 2, "Dates", "strawberry"); // 2 elements ar
// console.log('morefruits ' , moreFruits)
// console.log('splicedFruits ' , splicedFruits) // returns undefined

//sort
// moreFruits.sort()
// console.log(moreFruits)

////////////////////////////////////////////////////////////////////////
// foreach () - it calls a function for each element in the array
// Map() - it calls a function for each element in the array and returns a new array
// ,filter() - it filters the array and returns a new array
// reduce() - it reduces the array to a single value
// every() - it checks if all elements in the array are true
// some() - it checks if at least one element in the array is true

const months = ["January", "Frebruary", "March", "April", "May"];
// months.forEach(printMonth)
// function printMonth(value, idx, arr) {
//     console.log("Month : ", value, idx, arr)
// }

// const printMonth = function(value, idx) {
//     console.log("Month : ", value, idx)
// }

// const printMonth = (value, idx) => {
//     console.log("Month : ", value, idx)
// }
// months.forEach(printMonth)
// console.log('')
// months.forEach((value, idx) => {
//     console.log("Month : ", value, idx)
// })

// Qus - Difference between map and foreach
// const months1 = months.map((value, idx) => {
//     console.log("Month : ", value, idx)
//     return true + ':' + idx
// })

// const months2 = months.forEach((value, idx) => {
//     console.log("Month : ", value, idx)
// })

// console.log(months1) // we can expect an array because map returns an array
// console.log(months2) // we can expect undefined because forEach does not return anything

// const filteredMonths = months.filter((month) => {
//   console.log("month : " + month);
//   return month.toLowerCase().includes("m");
// });
// console.log("filteredMonth : ", filteredMonths); // we can expect an array because filter returns an array

// const studentsArray = [
//   { name: "Soumya", roll: 16 },
//   { name: "Rahul", roll: 22 },
//   { name: "Bishal", roll: 18 },
//   { name: "Viswananath", roll: 19 },
// ];


// const adultStudents = studentsArray.filter(student => student.roll >= 18)
// console.log(adultStudents) // we can expect an array because filter returns an array

// const defaultArray = [1, 2, 3, 4, 5]
// const oddNumber = defaultArray.filter(num => num % 2 !== 0)
// console.log(oddNumber)

const nums = [10, 20, 30, 40, 50, 60, 70]
const result = nums.reduce((accumulator, current, idx, arr) => {
    console.log(accumulator, current, idx)
    // return true
    return  idx + 1
}, 0)

const sum = nums.reduce((accumulator, current) => {
    console.log(accumulator)
    return accumulator + current
})
console.log(sum)
console.log('result : ' + result) //result value depends upon the last value of accumulator which is 7 in this case

// Finding maximum number using reduce method
// const maxNumber = nums.reduce((max, current) => {
//     console.log(`Comparing max: ${max} with current: ${current}`)
//     return current > max ? current : max
// })

// console.log('Maximum number in the array:', maxNumber)

// // Alternative way to find maximum with initial value
// const maxNumberWithInitial = nums.reduce((max, current) => {
//     return current > max ? current : max
// }, 0) // 0 as initial value

// console.log('Maximum number with initial value:', maxNumberWithInitial)


// // Finding maximum number using reduce method
// const maxNumber = nums.reduce((max, current) => {
//     console.log(`Comparing max: ${max} with current: ${current}`)
//     return current > max ? current : max
// })

// console.log('Maximum number in the array:', maxNumber)

// // Alternative way to find maximum with initial value
// const maxNumberWithInitial = nums.reduce((max, current) => {
//     return current > max ? current : max
// }, 0) // 0 as initial value

// console.log('Maximum number with initial value:', maxNumberWithInitial)

//some()
const numbers = [2, 11, 13]
const numbers1 = [11, 13]
const isSomeEvens = numbers.some(num => num % 2 === 0)
console.log(isSomeEvens) // true because 2 is even number

const isSomeEvens1 = numbers1.some(num => num % 2 === 0)
console.log(isSomeEvens1) // false because there is no even number in the array

const isSomeOdd = numbers.some(num => num % 2 !== 0)
console.log(isSomeOdd) // true because all numbers in the array are odd

const isSomeOdd1 = numbers1.some(num => num % 2 !== 0)
console.log(isSomeOdd1) // true because all numbers in the array are odd

//every()
let isEveryOdds = numbers.every(num => num % 2 !== 0)
console.log(isEveryOdds) // false because all numbers in the array are odd

let isEveryOdds1 = numbers1.every(num => num % 2 !== 0)
console.log(isEveryOdds1)
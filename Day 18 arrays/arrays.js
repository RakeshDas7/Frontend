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

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)

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

const moreFruits = [...fruits, 'Mango', 'Dates']
console.log(moreFruits)

const addFruits = ['berry', 'strawberry']
const allFruits = fruits.concat(addFruits)
console.log(fruits)
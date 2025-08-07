const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

const employee = [
  { name: "Raj", age: 25 },
  { name: "Rahul", age: 22 },
  { name: "Rohan", age: 28 },
  { name: "Shyam", age: 30 },
  { name: "Dhananjaya", age: 35 },
];

console.log(employee);
console.log(...employee);

const myName = "Sai Pranab Patra";
console.log(...myName);

//////////////////////////////////////////////////////////////////////
// const arr1 = [10, 20, 30, 40, 50]
// const arr2 = arr1
// arr2.push(90)
// console.log(arr1)
// console.log(arr2)

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}
arr2.push(90);
console.log(arr1);
console.log(arr2);

const arr3 = [10, 20, 30];
const arr4 = [...arr3, ...'Hello'];
arr4.push(77);
console.log(arr3);
console.log(arr4);

let num = [11, 22, 33, 44, 55];
num.jocn("❤️")
console.log(num)

const user ={
    name : 'Biswabhubsa Pradhan',
    age : 25,
}

// const copiedUser = {...user, city: 'BBSR'}
console.log(user)
console.log(copiedUser)
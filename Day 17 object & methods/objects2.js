const username = 'Sai'
//console.log(username)

// username = 'Sipun'
// console.log(username)

const person ={
    firstName : 'Asit',

    lastName : 'Kumar',

    'full-Name' : 'Asit Kumar',

    age : 23,

    isGraduated : true,

    address : {
        city : 'Kolkata',
        pin : 751012,
        isRental : false
    }

}

console.log(person.lastName)
person.lastName = "sahoo"

// person = {} // error => as person is const we can't change it

// let person2 = {
//     firstName : 'Raj',
//     lastName : 'Das'
// }
// person2 = {} //empty

// const isDeleted = delete person.lastName
// console.log(isDeleted)
// console.log(person)

// Object.seal(person) //it restrict the object so that any addition & deletion of any key can't be possible (still updating key &values are possible)

Object.freeze(person) //through freeze method we can't make any addition, deletion or updation of any key & value
if (true) {
    console.log("It is a truthy value") // output
} else {
    console.log("It is a falsy value")
}

if ("js") {
    console.log("It is a truthy value") //output
}else {
    console.log("It is a falsy value")
}


if (0) {
    console.log("It is a truthy value")
}else {
    console.log("It is a falsy value") // output
}

if (2) {
    console.log("It is a truthy value") //output
}else {
    console.log("It is a falsy value")
}


if (null) {
    console.log("It is a truthy value")
}else {
    console.log("It is a falsy value") //output
}

if (undefined) {
    console.log("It is a truthy value")
}else {
    console.log("It is a falsy value") // output
}

if (NaN) {
    console.log("It is a truthy value")
}else {
    console.log("It is a falsy value") // output
}

let s = BigInt(123)
console.log(s) // output: 123
console.log(typeof s)
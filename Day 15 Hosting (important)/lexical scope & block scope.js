function A() { // outer function
    let x = 10;
    console.log(x)

    function B() { // inner function
        const y = 20
        console.log(y)
        console.log(x) // This line triggers a clouser

        function C() {
            const z = 30
            console.log(z)
            console.log(x + y)
        }
        C()
    }
    B() // B() can only be called here inside the scope of A()
}

//B() // Error B() is not defined

const a = 'Hello veryone'
console.log(a)

A();
console.log('program ended')
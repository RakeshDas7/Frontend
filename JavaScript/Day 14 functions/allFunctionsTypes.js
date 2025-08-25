//function declaration
function addTwoNumber(x, y) {
    console.log("Value of x :", x);
    console.log("Value of y :", y);
    console.log("Addition is :", x + y);
  }
  addTwoNumber(10, 20); //function calling
  
  // Default Parameter
  function multipleTwoNumber(x, y = 21) {
    //function declaration with default value
    console.log("Value of x :", x);
    console.log("Value of y :", y);
    console.log("Addition is :", x * y);
  }
  multipleTwoNumber(9);
  
  // Function expresion
  const greet = function () {
    //Function Expression
    console.log("Hello Everyone");
  };
  greet();
  
  // Anonymous Function
  setTimeout(function () {
    //Anonymous function which is called automatically after 2 seconds
    console.log("Welcome back again!!!😉");
  }, 2000); //2000milisecond = 2 seconds then called this function
  
  // Arrow Function Expression
  const add = (a, b) => {
    console.log(a + b);
    console.log(a);
  };
  add(10, 20);
  
  // Named Function Expression
  const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  };
  const fff = factorial(9);
  console.log(fff)
  
  //IIFE
    // (function() {
    //     console.log("This runs immediately!");
    // })
  
  (() => {
      console.log("This runs immediately!");
  })();
  
  // Constructor Function
  function Person(name) {
    this.name = name;
  }
  const p = new Person("Alice");
  const q = new Person("Ram");
  console.log(p, q);
  
  // Generator Function
  function* count() {
      yield 1;
      yield 2;
      yield 3;
  }  
  const counter = count();
  console.log(counter.next()); // { value: 1, done: false }
   
  // Method Definition
  // const obj = {
  //   greet() {
  //     return "Hello!";
  //   }
  // };
  // console.log(obj)
  
  // class MyClass {
  //     sayHi() {
  //       console.log("Hi!");
  //     }
  //   }
    
  
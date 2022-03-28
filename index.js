// This is how you create a commment in Javascript 

/* Multi-line comment
    This is also 
    how you create 
    a comment in 
//     Javascript.
// */

// // A variable is a name/pointer for a value in memory 

// // There are 3 different ways to create a variable in JS 

// //var keyword
// // = <-- Assignment Operator
// var a = 5;

// // let keyword
// let b = false;

// // const keyword
// // may not be reassigned HOWEVER they may be mutated
// const c = 'hello world';

// // A function on the console object that logs whatever you give the console
// // console.log(a, b, c);

// a = (a * 9/5) + 32

// // console.log(a);

// /* Mathematecial Operators
//     + <-- Addition
//     - <-- Subtraction
//     * <-- Multiplication
//     / <-- Division
//     % <-- Remainder
//     ** <-- Exponentiation
// */

// // console.log(a % 2);

// // console.log(a ** 2)

// /*  Relational Operators
//  < <-- Less than
//  > <-- Greater than
//  <= <-- Less than or equal to
//  >= <-- Greater than or equal to
// */

// // console.log(a >= '41')

// /* Logical Operators
//     || <-- OR
//     && <-- AND
//     ! <-- NOT
// */

// /* Comparison Operators
//  == <-- Equality
//  != <-- Inequality
//  === <-- Strict Equality
//  !== <-- Strict Inequality
//  */

// // console.log(a == '41')

// /* Increment and Decrement
//  ++ <-- increment
//  -- <-- decrement
// */

// a++; // postfix increment
// let d = a++

// ++a; // prefix increment
// let e = ++a // assignment happens after increment occurs

// /*
//  '' <-- String
//  0 <-- Number
//  true <-- Boolean
//  [] <-- Arraw
//  {} <-- Object
// */

// /* Functions */

// // There are 3 different ways to write functions in JS
// function /*function keyword*/ stuff /*function name*/ () /*parameters*/ {
//     /*function body*/
//     return undefined
// }

// var things = function(ligma, deezNuts) {
//     return ligma === deezNuts
// }

// // const andReasons = (bofa, ) => {
//  return bofa += ' Alex got Roasted. ';
// }

// function invocation
// console.log(stuff());

// console.log(things(b, true));

// console.log(andReasons(c,));
// console.log(c)

/* Conditionals */

// if

// else if

// else

// let conditionalFunc = (param) => {
    // if /*if keyword*/ (param === true) /*conditional*/ {
    //     return true;
    // } else if (param === false) {
    //     return false;
    // } else {
    //     return 'Not a boolean';
    // }
// }

// console.log(conditional(b))

/**** Fizzbuzz ***** 
 *Given an interger, console log all nmbers from 1 to n
 however, for numbers divisible by 3 console log fizz instead.
 For numbers divisible by 5 console log buzz
 * Create a function when given a number console logs Fizz when
the number is. For both console log fizz buzz
 *
 *
*/



const fizzbuzz = (n) => {
    for (let i = 1; i<=n; i++){
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0 ) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    
    }
}

fizzbuzz(30)

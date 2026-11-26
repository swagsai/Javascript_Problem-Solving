// A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished executing.

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const result = outer();

// result();
// result();
// result();

// function Outer(){
//     let count = 0;

//     return function(){
//         count++
//         console.log(count);
        
//     }
// }

// const counter = Outer();

// counter();
// counter();
// counter();
// counter();

// const user = {
//     name: "Arun",

//     regularFunction: function () {
//         console.log(this.name);
//     },

//     arrowFunction: () => {
//         console.log(this.name);
//     }
// };

// user.regularFunction();
// user.arrowFunction();

    const a = { value: 10 };
const b = a;

b.value = 20;

console.log(a.value);
console.log(b.value);


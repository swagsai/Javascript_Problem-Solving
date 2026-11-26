//Hoisting means JavaScript processes declarations before executing the code.
// rules var   → undefined
// let   → ReferenceError
// const → ReferenceError
function test() {
    // x exists here, but is in TDZ
    console.log(x); // ❌ ReferenceError
    let x = 20;
}
// var x = 10;

// function test() {
//     var x = 20;
//     console.log(x);
    
// }

// test(); 
//  undefined 
//Global scope Example:Declears outise every thing and access every where

// let globalVariable = "I am a global variable";

// function GlobalScope(){
//     console.log(globalVariable)
// }
// GlobalScope()
// console.log("FunctionScope outside the function :",globalVariable)


// Function scope declears inside the function and access inside the function 

// function FunctionScope(){
//     var functionVariable = "I am a function variable";
//     console.log(functionVariable);
    
// }
// FunctionScope();
// console.log(functionVariable);

// let var const

if(true){
    let a = "kane"
    var b = "kali"
    const c = "nickel"
}
// console.log(b);    apart from var were all will show undefined because outside the block we can able to access it 


// ---- Redeclaration ----  var allows let and const doesnot allows

var x=1;
var x=2;
console.log(x);

// let y=1;
// let y=2;   will show error because redeclaration is not allowed in let and const
//  console.log(y);


// ---- Reassignment ----

let y=1
y=2
// console.log(y); //because reassign is possible in let 

var z=1
z=4
// console.log(z); //var also possible 

// in cost reassign and redeclartion both are not allowed



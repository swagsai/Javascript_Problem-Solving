//Scope means where a variable can be accessed in your code.
// Global Scope
// Function Scope - var
// Block Scope - let const
// let x = 10;

// if (true) {
//     let x = 20;
//     console.log(x);
// }

// console.log(x); 20 10 

// var x = 10;

// if (true) {
//     var x = 20;
//     console.log(x); // 20
// }

// console.log(x); // 20 20 

// 🧠 Your rule is now:
// Code	Result
// console.log(x); var x = 10	undefined
// console.log(x); let x = 10	ReferenceError
// console.log(x); const x = 10	ReferenceError
 for(let i=0;i<=3;i++){
    setTimeout(()=>{
        console.log(i);
        
    }
,1000)
 }
  for(var i=0;i<=3;i++){
    setTimeout(()=>{
        console.log(i);
        
    }
,1000)
 }
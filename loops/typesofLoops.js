// there are 5  types of loops in javascript
// 1. for loop - when you want to repeat the code when you know how many times the iteration need 
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// 2. while loop - repeats when the condition while is true.the condition is check before the each iteration 
// let i = 0;

 // while (i < 5) {
 //     console.log(i);
 //     i++;
 // }

// 3. do...while loop - Executes the code at least once because the condition is checked after the loop body.

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// 4.for...of → Array values iterate panna use pannuvom.

// let arr = [10, 20, 30, 40,10,20,30,40,50];

// let outPut = [];

// for (let value of arr){
//     let found = false;
//     for(let j=0;j<arr.length;j++){
//         if(value=== outPut[j]){
//             found = true
//         }
//     }
//     if(found==false){
//       outPut.push(value)
//     }
// }

// console.log(outPut);

// 5.for...in is a loop that iterates over the keys (property names) of an object.
// let marks = {
//     maths: 80,
//     science: 90,
//     english: 70,
//     computer: 95
// };

// let totalMarks = 0;

// for(let subject in marks){
//     totalMarks = totalMarks+marks[subject]
// }
// console.log(totalMarks);
let arr =  [10, 20, 30,10,20,30,40,50,99,99,40];

let newarr = [];

for(let i=0;i<arr.length;i++){
    let found = false
    let val = arr[i]

    for(let j=i+1;j<arr.length;j++){
        if(val===arr[j]){
            found = true
        }
    }
    if(found){
        newarr.push(val)
    }
}
console.log(newarr);

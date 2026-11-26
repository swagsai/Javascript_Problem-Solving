// some() -  The some() method in JavaScript checks whether at least one element in an array 
// satisfies a given condition. It returns true if any element matches the condition; otherwise, 
// it returns false. It stops checking once it finds a matching element.
// const str = "aabbcddee";

// let revrse = ""

// for(let i=str.length-1;i>=0;i--){
//     revrse = revrse+str[i]
    
// }
// console.log(revrse);

// function createCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const counter = createCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter();

//  indexOf() - is a JavaScript method available on both Arrays and Strings.

// Remove duplicate element

// const numbers = [10, 20, 30, 20, 40, 10];

// const removeDuplicate = numbers.filter((val,index)=>{
//     return numbers.indexOf(val)!==index
// })
// console.log(removeDuplicate);

// nested array into single array problem

const arr = [1, 2, 3, [44, 5], [6, 8, [9, 10]], [1, 2, 3]];

const flatterArr = (arr) =>{
   let result = []

   for(let item of arr) {
    if(Array.isArray(item)){
        result = result.concat(flatterArr(item))
    }else{
        result.push(item)
    }
   }
   return result
}
console.log(flatterArr(arr));





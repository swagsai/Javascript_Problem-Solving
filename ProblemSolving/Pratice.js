// let arr = [4, 12, 3, 8, 20, 6];

// const findDifferent = (arr) =>{
//     let smallest = Infinity
//     let largest = 0
     
//     for(let i=0;i<arr.length;i++){
//         let value = arr[i]

//         if(value>largest){
//             largest = value
//         }
//         if(value<smallest){
//             smallest = value
//         }
//     }
//     let difference = largest-smallest
//     return difference
    
// }
// console.log(findDifferent(arr));

// remmove the duplicate in the array
// let arr = [2, 5, 2, 8, 5, 9, 8, 1];
// let newArr = [];

// for(let i=0;i<arr.length;i++){
//     let val = arr[i]
//     let found = false
//     for(let j=0;j<arr.length;j++){
//         if(newArr[j]===val){
//             found = true
//         }
//     }
//     if(!found){
//         newArr.push(val)
//     }
// }
// console.log(newArr);

//find the missing number 

// let arr = [1, 2, 3, 5, 6];


// for(let i=1;i<=6;i++){
//     let val = i
//     let found = false
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]===val){
//           found = true
//         }
//     }
//     if(!found){
//      arr.push(val)
      
        
//     }
    
// }
// console.log(arr);
// let value = 5"6hdhd"
// console.log(value);
    // let arr = [2, 5, 2, 8, 5, 9, 8, 1];

    // for(let i=0;i<arr.length;i++){
    //     let val = arr[i]
    //     let duplicate = false

    //     for(j=0;j<arr.length;j++){
    //     if(i !== j && arr[i] === arr[j]){
    //         duplicate = true
    //     }
    //     }
    // if(duplicate){
    //     console.log(val);
        
    // }
        
    // }
//   let arr = [12, 35, 1, 10, 35, 20];
//   let maxNumber = Math.max(...arr)
//   let newArr = arr.filter((num)=>{
//     console.log(num !== maxNumber);
    
//     return num !== maxNumber
    
    
//   }
// )
//   let secondNumber = Math.max(...newArr)
 
//   console.log(secondNumber);
// let values = "abcdabc"  //a
// let found = false

// for(let i=0;i<values.length && !found;i++){
//     for(let j = 0;j<i;j++){
//       if(values[i]=== values[j]){
//         console.log(values[i]);
//          found=true
//          break

//       }
//     }
// }
//     let arr = [2, 5, 2, 8, 5, 2, 9, 8];  

//    let duplicateArr = []

//  arr.forEach((value)=>{
//  if(!duplicateArr.includes(value)){
//     duplicateArr.push(value)
//   }
//  })
// console.log(duplicateArr);

// for( ; num>0;num=Math.floor(num/10)){
//      let digit  = num%10
//      reverse = reverse*10+digit
// }


// console.log(reverse);
// let employees = [
//     { name: "Arun", salary: 25000 },
//     { name: "Kumar", salary: 30000 },
//     { name: "Bala", salary: 40000 },
//     { name: "Ravi", salary: 50000 }
// ];
// const filterArray = employees.find(val=>val.salary>25000)
// console.log(filterArray);

// let employees = [
//     { id: 1, name: "Arun", salary: 25000, department: "IT" },
//     { id: 2, name: "Bala", salary: 40000, department: "HR" },
//     { id: 3, name: "Kumar", salary: 30000, department: "IT" },
//     { id: 4, name: "Ravi", salary: 50000, department: "Finance" },
//     { id: 5, name: "Priya", salary: 40000, department: "IT" }
// ];

// const result = employees.filter((val)=>{
//     let sa
//     return val.salary>30000
// })
// console.log(result);

// const str = "aabbcddexx";



// for(let i=0;i<str.length;i++){
//     let found = false

//     for(let j=0;j<i;j++){
//         str[i]!==str[j]
//     }
// }

// const numbers = [10, 5, 8, 20, 15, 20];

// let largest = numbers[0];
// let secondLargest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {

//     let currentNumber = numbers[i]

//     if(currentNumber>largest){
//         secondLargest = largest
//         largest = currentNumber
//     } else if (currentNumber<largest && currentNumber>secondLargest){
//         secondLargest = currentNumber
//     }

// }

// console.log("Second Largest:",secondLargest);
// console.log("Largest:",largest);
// const arr = [10, 20, 30, 20, 40, 10, 50];

// const removeDuplicate = ((arr)=>{
//     return [...new Set(arr)]
// })

// console.log(removeDuplicate(arr));

// Expected output: [10, 20, 30, 40, 50]

let str = "javascript";

let reverse = "";

for(let i=str.length-1;i>=0;i--){
    reverse = reverse+str[i]
}
console.log(reverse);







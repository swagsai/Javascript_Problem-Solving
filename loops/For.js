// let num = 12345;

// for(let c=1;c<=num.length;c++){
//     console.log(c)
// }

// let num = 12345;
// let count = 0;

// while (num>0){
//     num = Math.floor(num/10)
//     count++
// }
// console.log(count);

// sum of digit

// let num = 12345;
// let total = 0;

// while(num>0){
//     let digit = num%10 // 12345 -> 5
//     total = digit+total// 5+0 = 5
//     num = Math.floor(num/10)// 1234/10 -> 4
// }
// console.log(total)

// reverse the number
// let num = 1234;
// let reverse = 0;

// while(num>0){
//     let value = num%10 //-> 4
//     reverse = reverse*10+value
//     num = Math.floor(num/10) // 123
// }
// console.log(reverse)

//using for

let num = 1234;
let reverse = 0;

for (; num > 0; num = Math.floor(num / 10)) {
    let value = num % 10;
    reverse = reverse * 10 + value;
}

console.log(reverse);

//largest number 
// let num = 58321;
// let largest = 0;

// for(;num>0;){
//     let digit = num%10;
//     if(digit>largest){
//         largest=digit
//     }
//     num = Math.floor(num/10)
    
// }
// console.log(largest);

// let num = 58321;
// let lateral = 0;

// while(num>0){
//     let reverse = num%10;
//     lateral = lateral * 10 + reverse;
//     num = Math.floor(num/10)
    
// }
// console.log(lateral);

//smallest digit


// let num = 58321;
// let count = 0

// for(;num>0;num=Math.floor(num/10)){
//     let value = num%10;
//     count++

// }
// console.log(count);


// let evernNumbers = [];

// for(;num>0;num = Math.floor(num/10)){
  
//     let digit = num%10
//     if(digit%2===0){
//         evernNumbers.push(digit)
//     }
    
    
// }
// console.log(evernNumbers);
// let num = 58321;
// let largest = 0;
// let secondLargest = 0;

// for(;num>0;num=Math.floor(num/10)){
//     let digit = num%10;
//     if(digit>largest){
        
//     }
// }
//forEach

// let numbers = [10, 5, 20, 8, 15, 20];
// let largest = 0;
// secondlargest = 0;

// numbers.forEach((val)=>{
//     if(val>largest){
//         largest=val
//     }else if(val<largest && val>secondlargest){
//         secondlargest=val
//     }
    
// })
// console.log("largest:",largest);
// console.log("SecondLargest:",secondlargest);

// let numbers = [2, 5, 2, 8, 5, 2, 10];

// let count = {};

// for(let i=0;i<numbers.length;i++){
//     let val = numbers[i]
//     if(count[val]){
//         count[val]=count[val]+1
//     }else{
//         count[val]=1
//     }
// }
// console.log(count);













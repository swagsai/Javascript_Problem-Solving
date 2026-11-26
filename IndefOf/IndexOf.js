// indexOf() = indexOf is a javascript methods that finds the position(index) of character or value in a string or array

const arr1 = [10, 20, 30, 40, 50];
const arr2 = [30, 50, 60, 70];


let resultArr = [];
let f=0;

for(let i=0;i<arr2.length;i++){
    let found = false;
    for(let j=0;j<arr1.length;j++){
      
      if(arr2[i]==arr1[j]){
        found = true;
        break
      }
    }
    if(found===false){
       resultArr[f]=arr2[i]
       f++
    }
}
console.log(resultArr);



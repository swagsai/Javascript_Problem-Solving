// Arrow fn vs normal fn the main different is normal fn has it own this where arrow function does not have 

//in normal fn

// const user = {
//     name: "Sairam",

//     sayName: function () {
//         console.log(this.name);
//     }
// };
// user.sayName();

//arrow fn
// const user = {
//     name: "Sairam",

//     sayName: () => {
//         console.log(this.name);
//     }
// };

// user.sayName(); //undefined 

const arr = [1, 2, 3, 4, 5];

const result = [];

for(let i=0;i<arr.length;i++){
    let val = arr.length-1-i
    result.push(arr[val])
}
console.log(result);

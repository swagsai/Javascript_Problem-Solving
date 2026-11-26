// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It helps us handle asynchronous results using .then() for success, .catch() for errors, and .finally() for code that runs after the Promise settles.
// A Promise has three states:
// 1. Pending — The operation is still in progress.
// 2. Fulfilled — The operation completed successfully.
// 3. Rejected — The operation failed.

const promises = new Promise((ressolved,reject)=>{
    ressolved("data received")
})

promises.then((data)=>{
    console.log(data);
    
})
    //A shallow copy creates a new outer object, but nested objects are still shared.
    // let user = {
    //     name: "Sairam",
    //     address: {
    //         city: "Chennai"
    //     }
    // };

    // let copy = { ...user };

    // copy.name = "Arun";
    // copy.address.city = "Bangalore";

    // console.log(user);
    // console.log(copy);
    //A deep copy creates completely independent copies, including nested objects.
    // let user = {
    //     name: "Sairam",
    //     address: {
    //         city: "Chennai"
    //     }
    // };

    // let copy = structuredClone(user);

    // copy.name = "Arun";
    // copy.address.city = "Bangalore";

    // console.log(user);
    // console.log(copy);

    //largest number in the array

    let numbers = [12, 5, 89, 34, 7, 56];
    let largest = 0
   

    for(let i=0;i<numbers.length;i++){
         let val = numbers[i]
         if(val>largest){
            largest = val
         }

    }
    console.log(largest);
    

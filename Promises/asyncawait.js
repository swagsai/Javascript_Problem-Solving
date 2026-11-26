// async -  is a keyword used before the function to make it return the promises.it allowes us to write a asynchronous code in clean and more readable

//await - is a keyword used inside async function to pause the execution of the function untile the promises settle,make it easier to handle the promises result 

//using fetch method 
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();
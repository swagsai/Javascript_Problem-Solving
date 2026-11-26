// Recursion is a technique where a function calls itself until a particular condition is satisfied.

function Count(num) {
    
    if (num>5) {
        return;
    }

    console.log(num);

    Count(num+1);
}

Count(1);
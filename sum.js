


// const num1 = 1;
// const num2 = 2;



// const sum = (num1,num2 ) => {
// return num1 + num2;
// }

// module.exports = sum;



const fizzbuzz = (num) => {
    if  (num%3 == 0 && num%5 == 0) {
        return "FizzBuzz"
    } else if (num%5 == 0){
        return "Buzz"
    } else if (num%3 == 0) {
        return "Fizz"
    } else {
        return num.toString()
    }
}

//THIS IS A SUM!

module.exports = fizzbuzz;
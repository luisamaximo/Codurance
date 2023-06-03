const leapYear = (num) => {

    const isDivisibleBy100 = num % 100 === 0;
    const isDivisibleBy400 = num % 400 === 0;
    const isDivisibleby4 = num % 4 == 0

    if(isDivisibleBy100 && !isDivisibleBy400){
        return false
    } 
    
    if (isDivisibleby4 || isDivisibleBy400) {
        return true
    }
}


module.exports = leapYear
function sum(a, b) {
    return a + b;
}

const isMultipleOfThree = (number) => {
    return number % 3 === 0;
}

const isMultipleOfFive = (number) => {
    return number % 5 === 0
}

const isMultipleOfThreeAndFive = (number) => {
    return isMultipleOfThree(number) && isMultipleOfFive(number);
}

function fizzbuzz(n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        const number = i + 1;

        if (isMultipleOfThreeAndFive(number)) {
            newArr.push("fizzbuzz");    
        } else if (isMultipleOfThree(number)) {
            newArr.push("fizz");    
        } else if (isMultipleOfFive(number)) {
            newArr.push("buzz");
        } else {
            newArr.push(number);
        }
    }
    return newArr;
}

module.exports = { 
    fizzbuzz,
    isMultipleOfFive,
    isMultipleOfThree,
    isMultipleOfThreeAndFive
};
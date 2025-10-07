function hello(name) {
    return `Hello ${name}`;
}

console.log(hello("ilya"));    


const numbers = [1, 2, 30, 4, 5];

function moreTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            return arr[i];
        }
    }
}

const result = moreTen(numbers)
console.log(result)




function calculator(num1, num2, operator) {
    if (operator === 'plus' || operator === '+') {
        return num1 + num2;
    } else if (operator === 'minus' || operator === '-') {
        return num1 - num2;
    } else if (operator === 'multiply' || operator === '*') {
        return num1 * num2;
    } else if (operator === 'divide' || operator === '/') {
        return num1 / num2;
    }
}


const results = calculator(2, 3, '-')

console.log(results)
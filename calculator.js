function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
        return (`-${num1 - num2}`);
    }
    return (num1 - num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function modulo(num1, num2) {
    return (num1 % num2);
}

function calculate(num1, num2, fn) {
    return (fn(num1, num2));
}

//examples


function calculator(operator) {
    //first number
    let one = prompt("Enter the first number: ");
    one = parseInt(one, 10);

    //operator
    operator = prompt("Enter an operator of your choice(+, -, *, /, %): ");

    //second number
    let two = prompt("Enter your second number: ");
    two = parseInt(two, 10);

    //answer variable
    let ans;

    //logic
    switch (operator) {
        case "+":
            ans = add(one, two);
            break;

        case "-":
            ans = subtract(one, two);
            break;

        case "*":
            ans = multiply(one, two);
            break;

        case "/":
            ans = divide(one, two);
            break;

        case "%":
            ans = modulo(one, two);
            break;
        default:
            break;
    }
    alert(ans);
}
calculator();


console.log(add(one, two));
console.log(subtract(one, two));
console.log(divide(one, two));
console.log(multiply(one, two));
console.log(calculate(one, two, add));
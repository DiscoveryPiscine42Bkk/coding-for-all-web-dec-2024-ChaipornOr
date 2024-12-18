
// DOM Elements
const leftOperand = document.getElementById("leftOperand");
const operator = document.getElementById("operator");
const rightOperand = document.getElementById("rightOperand");
const calculateButton = document.getElementById("calculateButton");

// Function to validate if a value is a positive integer
function isPositiveInteger(value) {
    const number = Number(value);
    return Number.isInteger(number) && number >= 0;
}

// Function to perform calculation
function calculate() {
    const left = leftOperand.value.trim();
    const right = rightOperand.value.trim();
    const op = operator.value;

    // Validate input fields
    if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    const leftNumber = parseInt(left);
    const rightNumber = parseInt(right);
    let result;

    // Perform calculation based on the operator
    switch (op) {
        case "+":
            result = leftNumber + rightNumber;
            break;
        case "-":
            result = leftNumber - rightNumber;
            break;
        case "*":
            result = leftNumber * rightNumber;
            break;
        case "/":
            if (rightNumber === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = leftNumber / rightNumber;
            break;
        case "%":
            if (rightNumber === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = leftNumber % rightNumber;
            break;
        default:
            alert("Error :(");
            console.log("Error :(");
            return;
    }

    // Display result
    alert("Result: " + result);
    console.log("Result:", result);
}

// Attach event listener to the button
calculateButton.addEventListener("click", calculate);

// Reminder alert every 30 seconds
setInterval(() => {
    alert("Please, use me...");
}, 30000);

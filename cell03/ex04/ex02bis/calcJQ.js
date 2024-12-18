$(document).ready(function() {
    // Function to perform the calculation
    $('#calculateBtn').click(function() {
        // Get the values of the inputs and operator
        let left = parseInt($('#leftOperand').val());
        let right = parseInt($('#rightOperand').val());
        let operator = $('#operator').val();

        // Validate inputs: must be positive integers
        if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        // Handle division/modulo by zero
        if ((operator === '/' || operator === '%') && right === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        // Perform the calculation based on the selected operator
        let result;
        switch (operator) {
            case '+':
                result = left + right;
                break;
            case '-':
                result = left - right;
                break;
            case '*':
                result = left * right;
                break;
            case '/':
                result = left / right;
                break;
            case '%':
                result = left % right;
                break;
            default:
                result = null;
        }

        // Display result in alert and log it in the console
        alert("Result: " + result);
        console.log("Result: " + result);
    });

    // Set up the periodic pop-up every 30 seconds
    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});

document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            // Check if value is a number or a special operator
            if (!isNaN(parseFloat(value)) || value === '.') {
                display.value += value; // Append the value to the display
            } else if (value === '=') {
                // Handle calculation and display result
                // Replace this with your calculation logic
                display.value = eval(display.value);
            } else if (value === 'AC') {
                display.value = ''; // Clear the display
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1); // Remove the last character
            } else {
                display.value += ' ' + value + ' '; // Add operators with spaces
            }
        });
    });
});

$(document).ready(function() {
    let colorOrder = ['red', 'green', 'blue'];  // Color order for clicks
    let colorReverseOrder = ['blue', 'green', 'red'];  // Reverse color order for mouseleave
    let currentColorIndex = 0;  // Start with red color

    // When the balloon is clicked
    $('#balloon').click(function() {
        // Increase size by 10px
        let currentSize = parseInt($(this).css('width'));
        if (currentSize >= 420) {
            // If size is greater than or equal to 420px, it explodes and resets
            $(this).css({
                width: '200px',
                height: '200px',
                backgroundColor: 'red'  // Reset to red
            });
        } else {
            // Increase the size by 10px
            $(this).css({
                width: currentSize + 10 + 'px',
                height: currentSize + 10 + 'px'
            });

            // Change the color in the next order
            $(this).css('background-color', colorOrder[currentColorIndex]);

            // Move to the next color in the sequence
            currentColorIndex = (currentColorIndex + 1) % colorOrder.length;
        }
    });

    // When the mouse enters and leaves the balloon
    $('#balloon').mouseenter(function() {
        // Nothing to change here, as we're just detecting entry
    }).mouseleave(function() {
        // Decrease the size by 5px, but make sure it doesn't go below 200px
        let currentSize = parseInt($(this).css('width'));
        if (currentSize > 200) {
            $(this).css({
                width: currentSize - 5 + 'px',
                height: currentSize - 5 + 'px'
            });
        }

        // Change the color in the reverse order
        $(this).css('background-color', colorReverseOrder[currentColorIndex]);

        // Move to the next color in the reverse order
        currentColorIndex = (currentColorIndex + 1) % colorReverseOrder.length;
    });
});
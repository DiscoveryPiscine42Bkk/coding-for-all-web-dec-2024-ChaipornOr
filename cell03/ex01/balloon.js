
        const balloon = document.getElementById("balloon");
        const colors = ["red", "green", "blue"]; // Colors order
        const reverseColors = ["red", "blue", "green"]; // Reverse colors for shrinking
        let size = 200; // Starting size
        let colorIndex = 0; // Current color index

        // Function to update balloon size and color
        function updateBalloon() {
            balloon.style.width = size + "px";
            balloon.style.height = size + "px";
            balloon.style.backgroundColor = colors[colorIndex % colors.length];
        }

        // Click event to grow the balloon
        balloon.addEventListener("click", () => {
            size += 10; // Increase size by 10px
            colorIndex++; // Change color
            if (size > 420) {
                alert("POP! The balloon exploded!");
                size = 200; // Reset to original size
                colorIndex = 0; // Reset color index
            }
            updateBalloon();
        });

        // Mouseleave event to shrink the balloon
        balloon.addEventListener("mouseleave", () => {
            size -= 5; // Decrease size by 5px
            if (size < 200) size = 200; // Minimum size limit
            colorIndex--; // Change color in reverse order
            if (colorIndex < 0) colorIndex = reverseColors.length - 1; // Loop reverse colors
            balloon.style.backgroundColor = reverseColors[colorIndex % reverseColors.length];
            balloon.style.width = size + "px";
            balloon.style.height = size + "px";
        });

        // Initialize the balloon
        updateBalloon();

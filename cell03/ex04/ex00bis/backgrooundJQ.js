
        $(document).ready(function() {
            $('#changeColorButton').click(function() {
                // Generate a random color
                var randomColor = getRandomColor();
                // Change the background color of the body
                $('body').css('background-color', randomColor);
            });

            // Function to generate a random hex color
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
        });
    
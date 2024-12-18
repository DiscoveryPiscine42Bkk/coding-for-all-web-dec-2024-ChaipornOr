
        // Get references to DOM elements
        const ftList = document.getElementById("ft_list");
        const newTaskButton = document.getElementById("newTaskButton");

        // Function to load tasks from cookies
        function loadTasks() {
            const tasks = getCookie("tasks");
            if (tasks) {
                const taskArray = JSON.parse(tasks);
                taskArray.forEach(task => addTask(task, false));
            }
        }

        // Function to save tasks to cookies
        function saveTasks() {
            const taskDivs = document.querySelectorAll(".todo");
            const taskArray = Array.from(taskDivs).map(div => div.textContent);
            setCookie("tasks", JSON.stringify(taskArray), 7);
        }

        // Function to add a task
        function addTask(taskText, save = true) {
            if (taskText.trim() === "") return;

            // Create a new div for the task
            const task = document.createElement("div");
            task.className = "todo";
            task.textContent = taskText;

            // Add a click event listener to remove the task
            task.addEventListener("click", () => {
                const confirmDelete = confirm("Do you really want to remove this task?");
                if (confirmDelete) {
                    task.remove();
                    saveTasks();
                }
            });

            // Add the task to the top of the list
            ftList.insertBefore(task, ftList.firstChild);

            // Save the updated list to cookies
            if (save) saveTasks();
        }

        // Function to handle the new task creation
        function createNewTask() {
            const taskText = prompt("Enter the new task:");
            if (taskText) {
                addTask(taskText);
            }
        }

        // Utility function to set a cookie
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Utility function to get a cookie
        function getCookie(name) {
            const cookieName = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(";");
            for (let cookie of cookieArray) {
                cookie = cookie.trim();
                if (cookie.indexOf(cookieName) === 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return null;
        }

        // Event listener for the "New" button
        newTaskButton.addEventListener("click", createNewTask);

        // Load tasks from cookies on page load
        loadTasks();

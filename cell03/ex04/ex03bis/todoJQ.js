$(document).ready(function() {
    // Load existing tasks from cookies if any
    loadTasks();

    // Add a new task
    $('#newTaskBtn').click(function() {
        // Prompt the user to enter a new task
        let newTask = prompt("Enter a new task:");
        if (newTask && newTask.trim() !== "") {
            // If the task is not empty, add it to the list and save it in the cookie
            addTask(newTask);
        }
    });

    // Function to add a task
    function addTask(taskContent) {
        // Create a new task element
        const taskDiv = $('<div></div>').text(taskContent);

        // Append the new task to the top of the list
        $('#ft_list').prepend(taskDiv);

        // Save the updated task list to the cookie
        saveTasks();
    }

    // Remove a task with confirmation
    $(document).on('click', '#ft_list div', function() {
        let task = $(this);
        // Ask for confirmation to remove the task
        let confirmRemove = confirm("Do you want to remove this task?");
        if (confirmRemove) {
            // If confirmed, remove the task and update the cookie
            task.remove();
            saveTasks();
        }
    });

    // Save tasks in a cookie
    function saveTasks() {
        let tasks = [];
        // Loop through all tasks in the list and add them to the tasks array
        $('#ft_list div').each(function() {
            tasks.push($(this).text());
        });

        // Save the tasks array as a cookie
        document.cookie = "tasks=" + JSON.stringify(tasks) + "; path=/";
    }

    // Load tasks from the cookie
    function loadTasks() {
        let tasksCookie = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (tasksCookie) {
            // Parse the task list from the cookie
            let tasks = JSON.parse(tasksCookie.split('=')[1]);
            tasks.forEach(function(task) {
                // Add each task to the list
                addTask(task);
            });
        }
    }
});

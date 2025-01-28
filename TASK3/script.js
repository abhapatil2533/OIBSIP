let taskIdCounter = 0;

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const task = {
                id: taskIdCounter++,
                text: taskText,
                createdAt: new Date().toLocaleString(),
                completed: false,
            };

            renderTask(task);
            taskInput.value = '';
        }

        function renderTask(task) {
            const taskList = task.completed ? document.getElementById('completedTasks') : document.getElementById('pendingTasks');

            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            if (task.completed) taskElement.classList.add('completed');
            taskElement.dataset.id = task.id;

            taskElement.innerHTML = `
                <span>${task.text} <small>(${task.completed ? `Completed at: ${task.completedAt}` : `Added on: ${task.createdAt}`})</small></span>
                <div>
                    <button class="edit" onclick="editTask(${task.id})">Edit</button>
                    <button class="${task.completed ? 'delete' : 'complete'}" onclick="${task.completed ? `deleteTask(${task.id})` : `completeTask(${task.id})`}">${task.completed ? 'Delete' : 'Complete'}</button>
                    <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;

            taskList.appendChild(taskElement);
        }

        function completeTask(id) {
            const taskElement = document.querySelector(`.task[data-id='${id}']`);
            if (!taskElement) return;

            taskElement.classList.add('completed');
            const taskList = document.getElementById('pendingTasks');
            taskList.removeChild(taskElement);

            const completedList = document.getElementById('completedTasks');
            const span = taskElement.querySelector('span');
            const now = new Date().toLocaleString();
            span.innerHTML = span.innerHTML.replace(/Added on: .*/, `Completed at: ${now}`);
            completedList.appendChild(taskElement);
        }

        function deleteTask(id) {
            const taskElement = document.querySelector(`.task[data-id='${id}']`);
            if (taskElement) {
                taskElement.remove();
            }
        }

        function editTask(id) {
            const taskElement = document.querySelector(`.task[data-id='${id}']`);
            if (!taskElement) return;

            const taskText = prompt('Edit your task:', taskElement.querySelector('span').textContent.split(' (')[0]);
            if (taskText && taskText.trim() !== '') {
                taskElement.querySelector('span').textContent = `${taskText.trim()} (${taskElement.classList.contains('completed') ? 'Completed at: ' + new Date().toLocaleString() : 'Added on: ' + new Date().toLocaleString()})`;
            }
        }
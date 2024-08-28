document.addEventListener('DOMContentLoaded', (event) => {
    loadTasks();
});

function addTask(columnId) {
    const taskText = prompt("Descreva a tarefa:");
    if (taskText) {
        const taskElement = createTaskElement(taskText);
        document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
        saveTask(columnId, taskText);
    }
}

function createTaskElement(text) {
    const task = document.createElement('div');
    task.className = 'task';
    task.textContent = text;
    task.draggable = true;

    // Botão de canetinha para inserir link
    const editLinkButton = document.createElement('span');
    editLinkButton.textContent = '✏️';
    editLinkButton.className = 'edit-link-button';
    editLinkButton.style.cursor = 'pointer'; // Mouse vira mãozinha ao passar
    editLinkButton.addEventListener('click', () => {
        const link = prompt("Insira o link para o projeto:");
        if (link) {
            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = '🔗';
            linkElement.target = '_blank';
            task.replaceChild(linkElement, editLinkButton); // Substitui a canetinha pelo link
        }
    });
    task.appendChild(editLinkButton);

    // Botão "X" menor para excluir a tarefa com duplo clique
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.style.cursor = 'pointer'; // Mouse vira mãozinha ao passar
    deleteButton.addEventListener('dblclick', () => {
        const columnId = task.parentElement.id.split('-')[0];
        task.remove();
        removeTask(columnId, text);
    });
    task.appendChild(deleteButton);

    // Adicionar eventos de arrastar
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);

    // Adicionar eventos para mover para cima e para baixo
    task.addEventListener('dblclick', () => moveTask(task, 'up'));
    task.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        moveTask(task, 'down');
    });

    return task;
}

function saveTask(columnId, taskText) {
    let tasks = JSON.parse(localStorage.getItem(columnId)) || [];
    tasks.push(taskText);
    localStorage.setItem(columnId, JSON.stringify(tasks));
}

function loadTasks() {
    const columns = ['requirement', 'analysis', 'design', 'development', 'testing', 'deployment', 'maintenance', 'feedback'];
    columns.forEach(columnId => {
        const tasks = JSON.parse(localStorage.getItem(columnId)) || [];
        tasks.forEach(taskText => {
            const taskElement = createTaskElement(taskText);
            document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
        });
    });
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
    event.dataTransfer.setData('task-id', event.target.id);
    setTimeout(() => {
        event.target.style.display = 'none';
    }, 0);
}

function dragEnd(event) {
    event.target.style.display = 'block';
}

document.querySelectorAll('.task-container').forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskText = event.dataTransfer.getData('text/plain');
    const columnId = event.target.id.split('-')[0];
    const targetContainer = event.target.closest('.task-container');

    if (targetContainer) {
        const taskElement = Array.from(document.querySelectorAll('.task')).find(task => task.textContent.includes(taskText));
        targetContainer.appendChild(taskElement);
        removeTaskFromAllColumns(taskText);
        saveTask(columnId, taskText);
    }
}

function removeTask(columnId, taskText) {
    let tasks = JSON.parse(localStorage.getItem(columnId)) || [];
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem(columnId, JSON.stringify(tasks));
    }
}

function removeTaskFromAllColumns(taskText) {
    const columns = ['requirement', 'analysis', 'design', 'development', 'testing', 'deployment', 'maintenance', 'feedback'];
    columns.forEach(columnId => {
        removeTask(columnId, taskText);
    });
}

function moveTask(task, direction) {
    const currentTask = task;
    const container = currentTask.parentElement;
    
    if (direction === 'up' && currentTask.previousElementSibling) {
        container.insertBefore(currentTask, currentTask.previousElementSibling);
    } else if (direction === 'down' && currentTask.nextElementSibling) {
        container.insertBefore(currentTask.nextElementSibling, currentTask);
    }
    
    updateLocalStorage(container);
}

function updateLocalStorage(container) {
    const columnId = container.id.split('-')[0];
    const tasks = Array.from(container.children).map(task => task.textContent.slice(0, -1)); // Remove o "X"
    localStorage.setItem(columnId, JSON.stringify(tasks));
}

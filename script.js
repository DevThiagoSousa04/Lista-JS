function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let ul = document.getElementById("taskList");

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    ul.appendChild(li);
    input.value = "";
}

function toggleTask(span) {
    span.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}
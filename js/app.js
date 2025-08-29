// 🌙/☀️ MODO OSCURO
const darkModeButton = document.getElementById("darkModeButton")
const body = document.body

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    darkModeButton.textContent = body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro"
});

// 📝 VARIABLES PRINCIPALES

const taskInput = document.getElementById("taskInput")
const createTaskButton = document.getElementById("createTaskButton")
const taskList = document.getElementById("taskList")


// 💾 GUARDAR EN LOCALSTORAGE

function saveTasks(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        const li = createElementTask(task);
        taskList.appendChild(li);
    });
}

// ➕ CREAR UN <li> PARA LAS TAREAS

function createElementTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="deleteButton">Eliminar</button>`;
    return li;
}

// 📨 SUBMIT (Agregar tarea)

createTaskButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    const task = taskInput.value;
    if (task === "") return;

    const li = createElementTask(task);
    taskList.appendChild(li);
    saveTasks(task);
    taskInput.value = "";
});

// ❌ CLICK EN ELIMINAR

taskList.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (evento.target.classList.contains("deleteButton")) {
        const taskItem = evento.target.closest("li");
        deleteTask(taskItem);
    };
});

// 🗑️ BORRAR TAREA

function deleteTask(taskItem) {
    if (confirm("¿Estas segura/o de borrar este elemento?")) {
        const text = taskItem.firstChild.textContent.trim();
        taskItem.remove();

        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter(t => t !== text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// 🚀 FUNCIONES QUE SE EJECUTAN AL INICIAR
loadTasks();

/*

        API de almacenamiento web

*/ 

// Guardar una lista de tareas en el almacenamiento web
const tasks = ["Comprar comestibles", "Pasear al perro", "Hacer ejercicio"];
localStorage.setItem("tasks", JSON.stringify(tasks));

// Recuperar la lista de tareas del almacenamiento web
const storedTasks = localStorage.getItem("tasks");
const parsedTasks = JSON.parse(storedTasks);
console.log(parsedTasks); // ["Comprar comestibles", "Pasear al perro", "Hacer ejercicio"]

// Local Storage
// Agregar una nueva tarea al Local Storage
const newTask = "Lavar los platos";
localStorage.setItem("newTask", newTask);

// Recuperar la nueva tarea del Local Storage
const storedNewTask = localStorage.getItem("newTask");
console.log(storedNewTask); // "Lavar los platos"

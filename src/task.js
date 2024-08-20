
// obtener la lista de tareas del almacenamiento
let tasks =JSON.parse(localStorage.getItem('tasks')) || [];

// FUNCION PARA PODER LLEVAR LAS TAREAS DE LA LISTA
export const getTasks = () => tasks;

// funcion para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para eliminar una tarea de la lista
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt (id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//FUNCION PARA ACTUALIZAR UNA TAREA DE LA LISTA
export const toogleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

};
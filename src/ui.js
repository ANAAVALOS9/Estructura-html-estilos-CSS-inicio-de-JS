import { getTasks } from "./task";

// funcion para mostrarle al usuario las tareas
export const renderTasks = () => {
    const taskList =document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();
    console.log("tasks, ", tasks)
    
    tasks.forEach((task) => {
     const li = document.createElement("li");
     li.setAttribute("data-id",task.id);

     //añadir clase solo si la tarea esta completada
     if(task.completed === true) {
        li.classList.add("completed");
     }

     li.innerHTML =`
         ${task.text}
        <div class="buttons">
         <button class="delete"> Eliminar </button>
         <button class="toggle"> ${task.completed === false ? "completar":"Deshacer"}    </button><
</div>
     `;

     taskList.appendChild(li);
    });
};
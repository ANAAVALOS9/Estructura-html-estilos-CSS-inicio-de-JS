import { renderTasks } from "./ui";
import { addTask, deleteTask, toogleTask } from "./task";


document.addEventListener("DOMContentLoaded",() => {

 renderTasks();

    document.getElementById("task-form").addEventListener("submit",(e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;

        if(taskInput !==""){
            addTask(taskInput);
            renderTasks();

            document.getElementById("task-input").value = "";
        }
    });

    document.getElementById("task-list").addEventListener("click",(e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.closest('li').getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }
        if(e.target.classList.contains("toggle")){
            const taskId = e.target.closest('li').getAttribute("data-id");
            toogleTask(taskId);
            renderTasks();
        }
    });
});

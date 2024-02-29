function addTask() {
    console.log("Función addTask() llamada.");
    
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    
    if (taskText !== "") 
    {
        var todayTasks = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        var taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        taskItem.classList.add("taskItem");
        // Crear el botón Completada
        var completeButton = document.createElement("button");
        completeButton.textContent = "Completada";
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", function() 
        {
            alert("¡Felicidades, una tarea menos!");
            // Mover la tarea completada al contenedor "completedTasks"
            var completedTasks = document.getElementById("completedTasksList");
            // Crear el elemento de carita feliz
            var completedTaskItem = document.createElement("li");
            completedTaskItem.textContent = taskText + " :) ";
            completedTasks.appendChild(completedTaskItem);
            // Actualizar contador de tareas completadas
            var completedTaskCount = document.getElementById("completedTaskCount");
            completedTaskCount.textContent = parseInt(completedTaskCount.textContent) + 1;
            // Eliminar la tarea de la lista de tareas de hoy
            todayTasks.removeChild(taskItem);
        });
        
        // Crear el botón Eliminar
        var deleteButtonWithIcon = document.createElement("button");
        var trashIcon = document.createElement("img");
        trashIcon.src = "imagenes/trashIcon.png"; // Ruta de la imagen
        trashIcon.alt = "Eliminar"; // Texto alternativo de la imagen
        deleteButtonWithIcon.appendChild(trashIcon);
        deleteButtonWithIcon.classList.add("deleteButton");
        deleteButtonWithIcon.addEventListener("click", function() {
            // Mostrar un mensaje de confirmación
            if (confirm("Estás seguro de eliminar, recuerda que puedes postergarla para otro momento")) {
                // Si el usuario confirma, realizar la eliminación
                // Mover la tarea eliminada al contenedor "deletedTasks"
                var deletedTasks = document.getElementById("deletedTasksList");
                var deletedTaskItem = document.createElement("li");
                deletedTaskItem.textContent = taskText + " :( "; // Agregar la carita triste
                // Crear el botón "Intentarlo"
                var tryButton = document.createElement("button");
                tryButton.textContent = "Intentarlo";
                tryButton.classList.add("tryButton");
                tryButton.addEventListener("click", function() {
                    alert("¡Nunca te rindas con una tarea!");
                    todayTasks.appendChild(taskItem); // Añadir la tarea eliminada de nuevo a la lista de hoy
                    deletedTasks.removeChild(deletedTaskItem); // Quitar la tarea de la lista de tareas eliminadas
                });
                deletedTaskItem.appendChild(tryButton);
                deletedTasks.appendChild(deletedTaskItem);
                // Eliminar la tarea de la lista de tareas de hoy
                todayTasks.removeChild(taskItem);
            }
        });
        
        // Agregar elementos al elemento de tarea
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButtonWithIcon);
        
        // Agregar la tarea al contenedor de tareas de hoy
        todayTasks.appendChild(taskItem);
        
        input.value = "";
    } else {
        alert("Por favor, ingrese una tarea.");
    }
}

// Llamada a la función addTask al cargar la página (ejemplo)
document.addEventListener("DOMContentLoaded", function() {
    addTask();
});

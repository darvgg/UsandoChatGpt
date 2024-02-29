function addTask() {
    console.log("Función addTask() llamada.");
    
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    
    if (taskText !== "") {
        var todayTasks = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        var taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        
        // Crear el botón Completada
        var completeButton = document.createElement("button");
        completeButton.textContent = "Completada";
        completeButton.addEventListener("click", function() {
            alert("¡Felicidades, una tarea menos!");
            // Mover la tarea completada al contenedor "completedTasks"
            var completedTasks = document.getElementById("completedTasksList");
            // Crear el elemento de carita feliz
            var happyFace = document.createElement("span");
            happyFace.textContent = " :) ";
            var completedTaskItem = document.createElement("li");
            completedTaskItem.textContent = taskText;
            completedTaskItem.appendChild(happyFace);/*Se añade carita feliz */
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
        trashIcon.src = "imagenes/trashIcon.png";
        trashIcon.alt = "Eliminar";
        trashIcon.classList.add("trashIcon"); // Agregar clase de estilo
        deleteButtonWithIcon.appendChild(trashIcon);
        deleteButtonWithIcon.addEventListener("click", function() {
            // Mover la tarea eliminada al contenedor "deletedTasks"
            var deletedTasks = document.getElementById("deletedTasksList");
            var deletedTaskItem = document.createElement("li");
            deletedTaskItem.textContent = taskText + " :("; // Agregar la carita triste
            // Crear el botón "Intentarlo"
            var tryButton = document.createElement("button");
            tryButton.textContent = "Intentarlo";
            tryButton.addEventListener("click", function() {
                alert("¡Nunca te rindas con una tarea!");
                todayTasks.appendChild(taskItem); // Añadir la tarea eliminada de nuevo a la lista de hoy
                deletedTasks.removeChild(deletedTaskItem); // Quitar la tarea de la lista de tareas eliminadas
            });
            deletedTaskItem.appendChild(tryButton);
            deletedTasks.appendChild(deletedTaskItem);
            // Eliminar la tarea de la lista de tareas de hoy
            todayTasks.removeChild(taskItem);
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

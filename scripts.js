console.log("TS");
var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description) {
        this.tasks.push(new Task(description));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(indexToDelete, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
manager.addTask("Cleaning");
manager.addTask("Home Work");
manager.addTask("Sport");
// manager.deleteTask(478)
console.log(manager.tasks);
console.table(manager.tasks);
// manager.updateTaskDescription(139, "sport1")
// function showTasksInTable(): void {
//     for (let task of manager.tasks) {
//     document.getElementById("tasks")!.innerHTML +=
//     `<tr> <td> ${task.id} </td> <td> ${task.description} </td> <td> ${task.completed} </td> </tr>`;
//     }
// }
// showTasksInTable();
function showTasksInLists() {
    document.getElementById("active").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("active").innerHTML += "\n        <div> <li class=\"list-group-item d-inline-block w-75\">".concat(task.description, "</li>\n        <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\">\n        <i class=\"fa-solid fa-check\"></i></button>\n        <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> \n        <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> \n        </div> ");
        }
        else {
            document.getElementById("completed").innerHTML +=
                "<div> <li class=\"list-group-item d-inline-block w-75 text-decoration-line-through\">".concat(task.description, "</li>\n        <span> <button class=\"btn btn-success\" disabled><i class=\"fa-solid fa-check-double\"></i></button>\n        <button class=\"btn btn-primary\" disabled><i class=\"fa-solid fa-pen\"></i></button>\n        <button class=\"btn btn-danger\" disabled><i class=\"fa-solid fa-trash\"></i></button></span>\n        </div> ");
        }
    }
}
showTasksInLists();
function completeTask(id) {
    manager.completeTask(id);
    showTasksInLists();
    console.table(manager.tasks);
}
;
function deleteTask(id) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        showTasksInLists();
        console.table(manager.tasks);
    }
}
;
function updateDescription(id) {
    // prompt for new description
    var newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription);
        showTasksInLists();
        console.table(manager.tasks);
    }
    else
        alert("Sorry! Something went wrong");
}
;
function addNewTask() {
    var description = document.getElementById("description").value;
    manager.addTask(description);
    document.getElementById("description").value = "";
    showTasksInLists();
    console.table(manager.tasks);
}
;

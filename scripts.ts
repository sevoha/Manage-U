console.log("TS");

class Task {
    public id : number;
    public completed : boolean;

    constructor(public description: string) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
    // get(propName:string): string | number {
    //     return propName;
    // }
    // set(propName:any, value:any) { + 
    //     propName = value;
    // }
}

class TaskManager {
    public tasks: Task[];
    constructor(){
        this.tasks = []
    }
    addTask(description: string): void{
        this.tasks.push(new Task(description));
    }
    deleteTask(id:number): void{
        let indexToDelete = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks.splice(indexToDelete, 1);
    }

    updateTaskDescription(id: number, newDescription: string): void{
        let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexToUpdate].description = newDescription;
    }

    completeTask(id:number): void{
        let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexToUpdate].completed = true;
    }

}
    let manager = new TaskManager();
manager.addTask("Cleaning")
manager.addTask("Home Work")
manager.addTask("Sport")
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
    document.getElementById("active")!.innerHTML = "";
    document.getElementById("completed")!.innerHTML = "";
    for (let task of manager.tasks) {
        if (task.completed == false) {
        document.getElementById("active")!.innerHTML += `
        <div> <li class="list-group-item d-inline-block w-75">${task.description}</li>
        <span> <button class="btn btn-success" onclick="completeTask(${task.id})">
        <i class="fa-solid fa-check"></i></button>
        <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> 
        <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> 
        </div> `;
    } 
    else {
        document.getElementById("completed")!.innerHTML += 
        `<div> <li class="list-group-item d-inline-block w-75 text-decoration-line-through">${task.description}</li>
        <span> <button class="btn btn-success" disabled><i class="fa-solid fa-check-double"></i></button>
        <button class="btn btn-primary" disabled><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-danger" disabled><i class="fa-solid fa-trash"></i></button></span>
        </div> `;
        }
    }
}

showTasksInLists();

function completeTask(id: number) {
    manager.completeTask(id);
    showTasksInLists();
    console.table(manager.tasks)
};

function deleteTask(id: number) {
  // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
    manager.deleteTask(id);
    showTasksInLists();
    console.table(manager.tasks)
    }
};

function updateDescription(id: number) {
  // prompt for new description
    let newDescription = prompt("Enter new description:");
    if (newDescription != null || newDescription != "") {
        manager.updateTaskDescription(id, newDescription!);
        showTasksInLists();
        console.table(manager.tasks)
    } 
    else alert("Sorry! Something went wrong");
};
function addNewTask() {
    let description = (document.getElementById("description") as HTMLInputElement).value;
    manager.addTask(description);
    (document.getElementById("description") as HTMLInputElement).value = "";
    showTasksInLists();
    console.table(manager.tasks)
};





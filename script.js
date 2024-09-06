let bt = document.querySelector('#create');
let text = document.querySelector('textarea');
let taskContainer = document.querySelector('#taskContainer');
let tasks=[]

bt.addEventListener("click",()=>{
    let new_task = document.createElement("div");
    console.log(new_task);
    let task_text = document.createElement("div");
    task_text.classList.add("task");
    task_text.innerText = text.value;
    new_task.appendChild(task_text);
    let dbt = document.createElement("button");
    dbt.classList.add('delete');
    dbt.innerText='Delete';
    dbt.addEventListener("click",()=>{
        
        event.target.parentElement.remove()
    });
    task_text.appendChild(dbt);
    taskContainer.appendChild(new_task);
    console.log("dasd");
});


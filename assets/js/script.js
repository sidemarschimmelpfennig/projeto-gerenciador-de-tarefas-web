//função adiciona tarefa 

function addTask() {
 
const taskTitle=  document.querySelector("#task-title").value;

  console.log(taskTitle)

    if(taskTitle){
        //clonar template 
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes 

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona nova tarrefa

        const list = document.querySelector("#task-list");

        list.appendChild(newTask);


        //adicionar o evento remover

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        } ) 


        // adicionar evento completar tarefa
         const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
             completeTask(this)
         });



        //limpa o texto

        document.querySelector("#task-title").value = "";

    

    }

}


//função remover tarefa

function removeTask(task){
task.parentNode.remove(true)

}

//função completar tarefa

function completeTask(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
}




//evento de adiconar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
    
}

)
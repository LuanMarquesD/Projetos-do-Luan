document.addEventListener('DOMContentLoaded', () =>{
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById ('task-input');
    const taskList = document.getElementById('task-list');

    function addTask (task){
        const li = document.createElement('li');
        li.className = 'task-item';
        li.appendChild(document.createTextNode(task));

        const deletarBtn = document.createElement('button')
        deletarBtn.className = 'delete-btn'
        deletarBtn.appendChild(document.createTextNode('remover'))
        li.appendChild(deletarBtn)

        taskList.appendChild(li)
    }

    taskForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        const newTask = taskInput.value
        if (newTask !== ''){
            addTask(newTask)
            taskInput.value = ''
        }
    })      



    taskList.addEventListener('click', (e) =>{
        if (e.target.classList.contains('delete-btn')){
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
          
    })

})
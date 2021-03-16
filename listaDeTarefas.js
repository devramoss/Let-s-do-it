(() => {const createTask = (evento) => {
     evento.preventDefault();

     const list = document.querySelector('[data-list]');
     const input = document.querySelector('[data-form-input]');
     const valor = input.value;
     const task = document.createElement('li');
     task.classList.add('task');

     const content = `<p class="content">${valor}</p>`;

     task.innerHTML = content;
     list.appendChild(task);
     task.appendChild(FinishButton());
     task.appendChild(DeleteButton());
     input.value = "" ;
}

const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);

const FinishButton = () => {
     const finishButton = document.createElement('button');
     finishButton.classList.add('check-button');
     finishButton.innerText = 'Concluir';
    
     finishButton.addEventListener('click', finishTask)
     return finishButton;
}

const finishTask = (evento) =>{
     const finishButton = evento.target;
     const finishedTask = finishButton.parentElement;
     finishedTask.classList.toggle('done')
}

const DeleteButton = () => {
     const deleteButton = document.createElement('button');
     
     deleteButton.innerText = 'Excluir';
     deleteButton.addEventListener('click', deleteTask)

     return deleteButton;
}

const deleteTask = (evento) => {
     const deleteButton = evento.target;
     const finishedTask = deleteButton.parentElement;

     finishedTask.remove();
     return deleteButton;
}
})();
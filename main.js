import FinishButton from './componentes/finishTask.js';
import DeleteButton from './componentes/deleteTask.js';

const createTask = (evento) => {
     evento.preventDefault();

     const list = document.querySelector('[data-list]');
     const input = document.querySelector('[data-form-input]');
     const valor = input.value;
     const flex = document.createElement('div');
     const task = document.createElement('li');

     task.classList.add('task');

     const content = `<p class="content">${valor}</p>`;

     task.innerHTML = content;
     list.appendChild(task);
     task.appendChild(flex);

     task.appendChild(FinishButton());
     task.appendChild(DeleteButton());
     input.value = "";

}
const newTask = document.querySelector('[data-form-button]');
newTask.addEventListener('click', createTask);


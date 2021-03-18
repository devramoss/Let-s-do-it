const DeleteButton = () => {
    const deleteButton = document.createElement('button');

    deleteButton.classList.add('delete-button');

    deleteButton.innerText = 'Excluir';
    deleteButton.addEventListener('click', deleteTask);

    return deleteButton;
}

const deleteTask = (evento) => {
    const deleteButton = evento.target;
    const finishedTask = deleteButton.parentElement;

    finishedTask.remove();
    return deleteButton;
}

export default DeleteButton;
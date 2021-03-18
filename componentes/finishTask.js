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

export default FinishButton;
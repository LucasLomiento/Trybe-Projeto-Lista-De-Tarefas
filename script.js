// Botão criar item
const buttonAddTask = document.getElementById('criar-tarefa'); // button
const taskList = document.getElementById('lista-tarefas'); // ol list in html

buttonAddTask.addEventListener('click', function () {
  let taskInput = document.getElementById('texto-tarefa'); // input of id:texto-tarefa removing extra spaces
  if (taskInput.value.trim() == '') return window.alert('Valor invalido');

  let taskElement = document.createElement('li');
  taskElement.textContent = taskInput.value;
  taskList.appendChild(taskElement);

  taskInput.value = '';

  //changing taskListElement font color when clicked
  let taskListElements = taskList.childNodes; // Create to control ol elements inside taksList
  taskListElements.forEach((element) => {
    element.addEventListener('click', function () {
      if (element.style.backgroundColor != 'grey') {
        element.style.backgroundColor = 'rgb(128,128,128)';
      } else {
        element.style.backgroundColor = '';
      }
    });
  });
});

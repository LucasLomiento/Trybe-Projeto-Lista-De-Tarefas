// Botão criar item
const buttonAddTask = document.getElementById('criar-tarefa'); // button
const taskList = document.getElementById('lista-tarefas'); // ol list in html

// all li in taskList
let taskListObject = document.getElementsByTagName('li');
let taskListElements = Array.prototype.slice.call(taskListObject);

buttonAddTask.addEventListener('click', function () {
  let taskInput = document.getElementById('texto-tarefa'); // input of id:texto-tarefa removing extra spaces
  if (taskInput.value.trim() === '') return window.alert('Valor invalido');

  let taskElement = document.createElement('li');
  taskElement.textContent = taskInput.value;
  taskList.appendChild(taskElement);

  taskInput.value = '';

  //Updating and changing taskListElement font color when clicked
  updateList();
  taskElementChanger();
});

// function for keep the list updated
function updateList() {
  taskListObject = taskList.getElementsByTagName('li');
  taskListElements = Array.prototype.slice.call(taskListObject); // Create to control ol elements inside taksList
}

function toggleChecked(event) {
  event.target.classList.toggle('completed');
}

function toggleFocused(event) {
  taskListElements.forEach((li) => {
    li.style.backgroundColor = '';
  });

  event.target.style.backgroundColor = 'gray';
}

function taskElementChanger() {
  taskListElements.forEach((element) => {
    element.removeEventListener('click', toggleFocused);
    element.removeEventListener('dblclick', toggleChecked);

    element.addEventListener('click', toggleFocused);
    element.addEventListener('dblclick', toggleChecked);
  });
}

//

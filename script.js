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

//implement remove all button
const buttonRemoveAll = document.getElementById('apaga-tudo');
buttonRemoveAll.addEventListener('click', function () {
  taskList.innerHTML = '';
  updateList();
});

//implement remove completed button
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
buttonRemoveCompleted.addEventListener('click', function () {
  taskListElements.forEach((element) => {
    if (element.classList.contains('completed')) {
      element.remove();
    }
  });
  updateList();
});

//implement save list button
const buttonSaveList = document.getElementById('salvar-tarefas');
buttonSaveList.addEventListener('click', function () {
  localStorage.setItem('taskList', taskList.innerHTML);
});

//load list from local storage
window.onload = function () {
  taskList.innerHTML = localStorage.getItem('taskList');
  updateList();
  taskElementChanger();
}

//implement move up button
const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', function () {
  taskListElements.forEach((element) => {
    if (element.style.backgroundColor === 'gray') {
      if (element.previousElementSibling) {
        taskList.insertBefore(element, element.previousElementSibling);
      }
    }
  });
  updateList();
  taskElementChanger();
});

//implement move down button
const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', function () {
  taskListElements.forEach((element) => {
    if (element.style.backgroundColor === 'gray') {
      if (element.nextElementSibling) {
        taskList.insertBefore(element.nextElementSibling, element);
      }
    }
  });
  updateList();
  taskElementChanger();
});

//implement remove selected button
const buttonRemoveSelected = document.getElementById('remover-selecionado');
buttonRemoveSelected.addEventListener('click', function () {
  taskListElements.forEach((element) => {
    if (element.style.backgroundColor === 'gray') {
      element.remove();
    }
  });
  updateList();
  taskElementChanger();
});
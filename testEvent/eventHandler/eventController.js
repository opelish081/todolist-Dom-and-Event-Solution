import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const addTodoHandler = () => {
  let inputField = document.querySelector('input')
  if(inputField.value.trim()) {
    let add = addTodo(inputField.value)
    showTodoItem(add, inputField.value)
    let setDoneButton = document.getElementById(add).children[1]
    setDoneButton.addEventListener('click', notDoneButtonHandler)
    let removeButton = document.getElementById(add).children[2]
    removeButton.addEventListener('click', removeButtonHandler)
  }
  updateStatus()
}

const notDoneButtonHandler = (event) => {
  let button = event.target
  button.textContent = 'Done'
  button.style = 'background-color: green; color: white;'
  setItemToDone(parseInt(button.parentNode.id))
  updateStatus()
}

const removeButtonHandler = (event) => {
  let button = event.target
  removeTodoItem(button.parentNode.id)
  removeTodo(parseInt(button.parentNode.id))
  updateStatus()
}

const updateStatus = () => {
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
// }

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }

export {addTodoHandler}

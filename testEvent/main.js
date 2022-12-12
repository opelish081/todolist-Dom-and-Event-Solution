import { addTodoHandler } from './eventHandler/eventController.js'

let addButton = document.getElementById('addBtn')
addButton.addEventListener('click', addTodoHandler)
